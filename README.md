#Daytime Server

[![npm package](https://nodei.co/npm/daytime-is-not-dead.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/daytime-is-not-dead/)

This server runs on port 13 and sends the server current time in response to a client connection. It is an implementation of [RFC 867](https://tools.ietf.org/html/rfc867)

##Install

```sh
$ npm install -g daytime-is-not-dead

```

##Run

You'll need to run it with elevated privileges since it uses a reserved port.

```sh
$ sudo daytime-is-not-dead
```
