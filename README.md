# Blockchain Application 

This readme provides an overview and instructions for the complete web3 application with transaction capabilities for sending and receiving cryptocurrencies from the Ethereum network. The application integrates with the Metamask wallet and utilizes various technologies including ReactJS for the front end, HardHat for the back end, a Solidity smart contract, and the GIPHY API for additional functionality.

## Features

- Connects to the Ethereum network through Metamask wallet integration.
- Allows users to send and receive cryptocurrencies.
- Utilizes a Solidity smart contract to manage transactions.
- Integrates with the GIPHY API to enhance the user experience.

## Prerequisites

Before running the blockchain application, ensure that you have the following prerequisites installed on your system:

- Node.js (version X.X.X or higher)
- npm (version X.X.X or higher)
- Metamask browser extension
- HardHat (Ethereum development environment)

## Installation

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a new `.env` file in the project root directory.

2. Configure the following environment variables in the `.env` file:

   - `REACT_APP_INFURA_PROJECT_ID`: Your Infura project ID. You can obtain it by creating an account at [https://infura.io](https://infura.io).
   - `REACT_APP_CONTRACT_ADDRESS`: The address of the deployed Solidity smart contract.
   - `REACT_APP_GIPHY_API_KEY`: Your GIPHY API key. You can obtain it by creating an account at [https://developers.giphy.com](https://developers.giphy.com).

## Deployment

1. Compile and deploy the Solidity smart contract using HardHat:

   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

   Replace `<network-name>` with the desired Ethereum network (e.g., `rinkeby`, `mainnet`).

2. Start the application:

   ```bash
   npm start
   ```

3. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage

1. Connect Metamask to your desired Ethereum network.

2. Use the web interface to interact with the blockchain application:
   - Select a cryptocurrency and enter the recipient's address to send funds.
   - View transaction history and balances.
   - Explore additional features powered by the GIPHY API.

## Contributing

Contributions to the blockchain application are welcome. If you encounter any issues or have suggestions for improvements, please create a new issue on the GitHub repository.



![neo](https://user-images.githubusercontent.com/99200113/193417743-19bd2d18-f972-47c4-a934-d601128769d4.gif)

#


![Peek 2022-10-01 12-50](https://user-images.githubusercontent.com/99200113/193417476-5c17e351-1ebb-4313-9572-9ecfe5ce1d43.gif)
