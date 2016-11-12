#!/bin/bash
tmux -2 new-session -ds blog
tmux rename-window -n 'Middleman'
tmux send-keys 'middleman' C-m
tmux new-window -n 'Vim'
tmux send-keys 'vim .' C-m
tmux new-window -n 'zsh'
tmux a -t blog

