#### Compile bifrost from source
1. Enssensial builder tools
- Debian/Ubuntu
```
sudo apt install -y cmake pkg-config libssl-dev git gcc build-essential clang libclang-dev
```
- MacOS
```
brew install openssl cmake llvm
```
- Windows: [Getting Started On Windows](https://substrate.dev/docs/en/overview/getting-started#getting-started-on-windows)

2. Install [Rust](): 
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

source ~/.cargo/env

rustup update nightly
rustup update stable

rustup target add wasm32-unknown-unknown --toolchain nightly
```

3. Build bifrost
```
git clone https://github.com/bifrost-finance/bifrost.git

cd bifrost && cargo build --release
```

The binary will be generated at **/target/release/bifrost-node**

#### Run bifrost from docker image
1. Install docker. Check out [Get Docker](https://docs.docker.com/get-docker/), that depends on you platform.
2. Pull latest bifrost image from dockerhub
```
docker pull bifrostnetwork/bifrost:latest
```
3. Run it
```shell
docker run --name=alice -p 9944:9944 -p 9933:9933 bifrostnetwork/bifrost:latest --base-path /tmp/alice \
--unsafe-rpc-external \
--rpc-port 9933 \
--rpc-cors all \
--unsafe-ws-external \
--ws-port 9944 \
--chain=dev \
--alice \
--port 30333 \
--node-key 0000000000000000000000000000000000000000000000000000000000000001 \
--validator
```
