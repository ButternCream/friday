# Use the official Node.js 18 image as a base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Update apt-get
RUN apt-get update

# Copy package.json and package-lock.json
COPY yarn.lock package*.json ./

# Install dependencies including TypeScript and ts-node
RUN yarn global add typescript ts-node
RUN yarn install


# Copy the rest of the application's source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the TypeScript application directly
CMD ["ts-node", "src/index.ts"]
