# Git & GitHub

Il faut bien différencier Git de GitHub.
Git est un programme de versionning, il nous permet de garder un historique complet de notre projet. 
GitHUb est une plateforme de collaboration permettant d'y stocker et de partager nos repos Git.

## Initialisation d'un repo Git

Pour initialiser un repertoire comme etant un projet git, il faut utiliser la commande suivante : `git init`. Cela aura pour effet de créer un répertoire caché .git nous permettant d'utiliser les commandes de Git pour notre projet.

Si on veut partir d'un projet existant, on utilisera plutôt la commande `git clone`. Cela aura pour effet de nous créer un nouveau repertoire avec une copie du projet. Le repo local sera d'ailleurs directement rattachée au dépôt distant.

## Ignorer des fichiers et des répertoires

On peut dire à Git d'ignorer certains fichiers ou repertoires en précisant ces éléments ligne par ligne dans un fichier caché **.gitignore**. 

## Enregistrer nos modifications dans Git

Dans un premier temps, il faut suivre les fichiers avec `git add .` Ca aura pour effet de les placer dans la staging area (zone d'indexation). Une fois placés dans cette zone, les fichiers sont prêts pour être "commit".

Pour faire un commit (un instantané / un snapshot), il faut utiliser la commande `git commit -m "le message"`.

Si on ne précise pas -m "message", Git va nous ouvrir un éditeur de code / texte pour écrire notre message de commit.

Il faut savoir que chaque commit est identifié par un identifiant.

## Logguer nos commits

POur afficher une liste de nos commits, on peut utiliser la commande `git log` ou `git reflog`.

## Erreurs courrantes

On a indexé un fichier qu'il ne fallait pas suivre ! Dans ce cas on va utiliser la commande `git rm --cached nomFIchier` pour supprimer le fichier de la zone d'indexation avant de commit !

On a fait une erreur dans le nom de notre précédent commit, comment y remédier ? C'est très simple, grâce à la commande `git commit --amend -m "nouveauMessage"`

On a oublié d'intégrer un fichier dans notre précédent commit. Comment résoudre ce problème ? En indexant tout d'abord le fichier manquant avec `git add .` puis en faisant `git commit -amend --no-edit`, ce qui aura pour effet de modifier le précédent commit effectué.

PS : -a est la syntaxe raccourcie pour --amend

On veut revenir à un commit antérieur : `git reset --hard ID` ou `git checkout ID`


## Les Branches

Dans Git, on peut créer des branches pour chaque nouvelles fonctionnalité ou résolution de bugs afin de ne pas perturber le code principal et eviter de le casser.


`git branch` : savoir sur quelle branche on est.
Créer une branche : `git branch nomBranche`
Créer une branche et se déplacer dessus : `git checkout -b nomBranche`
Se déplacer sur une autre branche : `git checkout nomBranche`
Supprimer une branche : `git branch -D nomBranche`

Fusionner deux branches : Se positionner dans celle qui va recevoir les commit de l'autre (souvent master) puis faire la commande 
`git merge nomBranche`


## Les conflits 

Si on merge des modifications qui changent les mêmes lignes d'un fichier, il y aura conflit : il faudra qu'on choisisse quelle version garder.


## repo distant

Si je veux rattacher mon repo local a un repo distant, il faut que j'indique le repo distant associé avec la commande `git remote add origin adressegit`. C'est ce qu'on appelle un remote.

Pour supprimer une synchro -> `git remote remove nomsynchro`
ex : `git remote remove origin`

Pour lister les remote attachés a notre rpo local : `git remote -v`

Pour pusher notre travail sur le repo distant il nous faut utiliser la  commande `git push`
Attention la premiere fois il faut preciser l'upstream de cette manière : `git push -u nomRemote nomBranche`
Exemple : `git push -u origin master`