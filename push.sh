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

# increments version number
VERSION="version.txt"
COUNTER=`cat $VERSION`
COUNTER=$[COUNTER + 1]
# random incrementer
#COUNTER=$[COUNTER + $[ ( $RANDOM % 8 ) + 10 ]]
echo $COUNTER > $VERSION

# debug
cp pageheader-orig.html pageheader.html
HEADER="pageheader.html"
echo "Debug Version: " >> $HEADER
echo $COUNTER >> $HEADER

echo $COUNTER

set -e
# adds --all
git add --all
# git status
git commit -m "$C"
# pushes to "origin master"
# you might need to modify the following line
git push origin HEAD:master
# git status