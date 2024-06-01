# **Timestamp API Documentation**

This project provides a simple API to create text files with the current timestamp and to retrieve a list of these files.

## Features

- **Create Timestamp File**: Creates a text file with the current timestamp.
- **List Timestamp Files**: Retrieves a list of all the timestamp files in the `files` directory.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (comes with Node.js)

## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RadhaPriyadarshan/Timestamp-API.git
   cd Timestamp-API
   

## **Links**



* **GitHub Repository**:[ Timestamp API GitHub](https://github.com/RadhaPriyadarshan/Timestamp-API.git)
* **Deployed API**:[ Timestamp API on Render](https://timestamp-api-yhz9.onrender.com)
* **Postman Documentation**:[ Timestamp API Postman Documentation](https://documenter.getpostman.com/view/22447139/2sA3QwaUsm)


## **Features**



* **Create Timestamp File**: Creates a text file with the current timestamp.
* **List Timestamp Files**: Retrieves a list of all the timestamp files in the `files` directory.


## **API Endpoints**


### **1. Create Timestamp File**



* **Method**: `POST`
* **URL**: `https://timestamp-api-yhz9.onrender.com/create`
* **Description**: Creates a text file with the current timestamp.


#### **Example Request**
````
POST /create
````

**Example Response**
````
{

  "message": "File created",

  "filename": "2024-05-31_15-30-00.txt"

}
````

### **2. List Timestamp Files**



* **Method**: `GET`
* **URL**: `https://timestamp-api-yhz9.onrender.com/`
* **Description**: Retrieves a list of all the timestamp files in the `files` directory.


#### **Example Request**
````
GET /
````
**Example Response**
````
{

  "files": [

	"2024-05-31_15-30-00.txt",

	"2024-05-31_15-35-00.txt"

  ]

}
````
## Postman Documentation:
- https://documenter.getpostman.com/view/22447139/2sA3QwaUsm
## Published on Render.com:
- https://timestamp-api-yhz9.onrender.com
