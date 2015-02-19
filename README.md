# grunt-init vccw

This is a grunt-init template for create a Vagrant based WordPress development environment.

## Getting Started

Install grunt-init.

```
$ npm install grunt-init -g
```

Create a template derectory for the grunt-init.

```
$ mkdir ~/.grunt-init
```

Clone this project into the template directory.

```
$ git clone --recursive git@github.com:vccw-team/grunt-vccw.git ~/.grunt-init/vccw
```

## Place a new VCCW environment.

Create a directory like following.

```
$ mkdir ~/Desktop/wp
```

Move into the directory.

```
$ cd ~/Desktop/wp
```

Place a new VCCW environment.

```
$ grunt-init vccw
```

Run provisioning.

```
$ vagrant up
```

That's it!
