---
layout: page
title: Branch do Git no terminal linux
description: Mostrar branch do Git no terminal
---

# Mostrar branch do Git no terminal

(Arquivo .bashrc), `source ~/.bashrc`

``` sh
export PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[1;33m\]$(__git_ps1 "(%s)")\[\033[01;34m\]$ \[\033[00m\]'
```