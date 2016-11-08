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
Running "init:vccw" (init) task
This task will create one or more files in the current directory, based on the
environment and the answers to a few questions. Note that answering "?" to any
question will show question-specific help and answering "none" to most questions
will leave its value blank.

Please answer the following:
[?] hostname (vccw.dev) wordpress.dev
[?] ip (192.168.55.10)
[?] wp_lang (en_US) ja
[?] wp_version (latest)
[?] Do you need to make any changes to the above before continuing? (y/N)

Writing .editorconfig...OK
Writing .gitignore...OK
Writing Vagrantfile...OK
Writing ansible.cfg...OK
Writing provision/default.yml...OK
Writing provision/playbook.yml...OK
Writing provision/playbooks/commands.yml...OK
Writing provision/playbooks/middleware.yml...OK
Writing provision/playbooks/templates/.bash_profile...OK
Writing provision/playbooks/templates/.editorconfig...OK
Writing provision/playbooks/templates/.gemrc...OK
Writing provision/playbooks/templates/.gitignore...OK
Writing provision/playbooks/templates/.my.cnf...OK
Writing provision/playbooks/templates/.npmrc...OK
Writing provision/playbooks/templates/composer.json...OK
Writing provision/playbooks/templates/extra-wp-config.php...OK
Writing provision/playbooks/templates/guest-wp-cli-config.yml...OK
Writing provision/playbooks/templates/host-wp-cli-config.yml...OK
Writing provision/playbooks/templates/index.php...OK
Writing provision/playbooks/templates/mailcatcher...OK
Writing provision/playbooks/templates/multisite-htaccess...OK
Writing provision/playbooks/templates/site.conf...OK
Writing provision/playbooks/templates/vccw.sh...OK
Writing provision/playbooks/wordpress.yml...OK
Writing site.yml...OK

Initialized from template "vccw".

Done, without errors.
```

Run provisioning.

```
$ vagrant up
```

That's it!
