import axios from "axios";
import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

function UserList() {
	const [listOfUSer, setlistOfUSer] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => setlistOfUSer(response.data))
			.catch((error) => console.log(error));
	});
	return (
		<div className="container">
			<h1 className="titleUser">List Of Users</h1>
			{listOfUSer.length > 0 ? (
				<div>
					<ul className="list-group">
						<li className="list-group-item d-flex justify-content-between align-items-center  list-group-item-primary">
							Name <span>Email</span>
						</li>
					</ul>
					<ul className="list-group">
						{listOfUSer.map((user) => (
							<li
								key={user.id}
								className="list-group-item d-flex justify-content-between align-items-center"
							>
								{user.name}
								<span className="">{user.email}</span>
							</li>
						))}
					</ul>
				</div>
			) : (
				<div className="container">
					<Spinner animation="border" variant="primary" />
				</div>
			)}
		</div>
	);
}

export default UserList;
