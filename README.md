# Next.js 12.2 Vulnerability PoC

This is a proof of concept application running Next.js 12.2 in a Docker container.

## Building the Docker Image

To build the Docker image, run:

```bash
docker build -t nextjs-vulnerability-poc .
```

## Running the Container

To run the container, use:

```bash
docker run -p 3000:3000 nextjs-vulnerability-poc
```

The application will be available at http://localhost:3000

## Development

To run the application locally without Docker:

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000 