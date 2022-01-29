# data
Document Objective:

This document is prepared for a preliminary proposal for the project “Store Data in Secure and Private Way”. Document compromises:
●	Project Overview/ Scope of Work.
●	Features and technical aspects of the project.
●	Details of Project Deliverables
●	Terms and Conditions

Overview
Develop an MPV Web App where users can connect their wallet and upload their files which will go to Blockchain and only authorized users can see it.

Breakdown on case studies:
We can break down the whole case study/requirement in the following modules/phases.
●	Smart Contract
●	Data Encryption and IPFS
●	Basic Web App
 
Smart Contract Development:
We will create a Smart Contract that will be used for the MVP App, this contract will have the following features.
a.	Store Data hash
b.	Create an ERC721 based tokens
c.	Owner Recognition
d.	Display Decryption keys
e.	Display IPFS Hash
f.	Add New users to authorize files
g.	Renounce Ownership


It will be a Solidity-based Smart Contract that can work on Binance Smart Chain or Ethereum Network.

Data Encryption and IPFS
IPFS itself does not have any content encryption, so anyone can download and view that data if they have the CID/IPFS hash.

In order to make it private and allow access to only authorized users, we have to use some Encryption Algorithm to the file itself before sending it to the IPFS.

Let’s understand this by example:

Content encryption is used to secure data until someone needs to access it. Albert creates a spreadsheet for his monthly budget and saves it with a password. When Albert needs to access it again, he must enter his password to decrypt the file.
Without the password, Laika cannot view the file.
 
OUR GOAL:
Our goal is to secure files before they go to the IPFS, this way if anyone has the IPFS hash, they cannot view the files until they have the decryption key.

To make things more secure, we will also add one more layer of privacy, IPFS CID itself will be encrypted so that nonauthorized users can not view the CID.

In order to do this, we will use Metamask RPC Encryption and Decryption functions, when the user will upload the files, and sign them with the Metamask, we will add encryption and allow this user only to view the IPFS CID.

In order to view the IPFS CID, the user needs to connect their MetaMask wallet, the smart contract will verify the owner of the token and if verified, it will reveal the correct IPFS CID and its decryption key to open/download the uploaded files.

NOTE: This won’t work in Metamask Mobile as mobile metamask does not support this feature yet.
 
Web App
Web App will have a connect button where users can connect with the Blockchain.
 After connection,
●	it will allow them to upload files.
●	View all files they uploaded [ IPFS link]
●	Share files with another user[ by their public key]

Required Minimum Technology/Tools Stacks:

Modules:	Technologies
Frontend:	React JS
Smart Contract:	Solidity
Backend Work:	NodeJs
Server:	Netlify
Repository:	Github


STEPS TO COMPLETE
✔ Smart Contract Development
✔ UI/Wireframes
✔ Web3 Integration
✔ Upload Files from Web App
✔ IPFS Encryption
✔ Decryption at user App
✔ User profile
✔ after testing and before code deployment to client’s server

Deliverable:
At the end of the project, below will be deliverables.
❖	MVP Web App
❖	Smart Contract
❖	Well commented and clean source code
 
Summary:
The Future of Business Technology with Blockchain as an application

Uploading documents and Files
Display files link that user has uploaded
Data Storage
.MP4
.MP3
Video features
Build out data pages such as Name, email, address, etc..and ability to add data fields and notes using drag and drop with React.
Invoices

Metamask is used so that users can connect on a private secure network

Summary:

1.	Creating and deploying the Smart contract 
2.	Smart contract integration into an existing App
3.	Create Encryption/Decryption Process
4.	IPFS Uploading
5.	Adding a layer to display decryption key and IPFS CID to owner only
6.	Adding the functionality to transfer/share data
7.	Backend encryption/decryption
8.	White label Branding
![image](https://user-images.githubusercontent.com/80406648/151671846-971a0470-f5d9-49b0-98cd-82c71858f0a1.png)

