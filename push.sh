# syntax check
if [[ $# -eq 0 ]] ; then
    echo 'Pass in a message for the commit!:'
    echo 'Ex) -- (No Quotes Needed)'
    echo "Commit Message"
    exit 0
fi

C=''
for i in "$@"; do 
    C="$C ${i//\"/\\\"}"
done

#increments version number
VERSION="version.txt"
count='cat $VERSION'
((count++))
echo $count > $VERSION

set -e
# adds --all
git add --all
# git status
git commit -m "$C"
# pushes to "origin master"
# you might need to modify the following line
git push origin HEAD:master
# git status