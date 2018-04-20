#! /bin/bash


#Declarer les variables

NAME=""
REP1=""
REP2=""
REP3=""
REP42=""



#Les Fonctions

question2()
{
  echo -e "\033[1;31m Quel est ton language de prédiléction?\033[0m"
  select reponse2 in "Bash" "HTML & CSS" "0100101"
do
case $reponse2 in
	"Bash" ) REP2=$reponse2;  echo "Fuyez pauvres fous"; break;;
	"HTML & CSS" ) REP2=$reponse2;  echo "Hello World"; break;;
	"0100101" ) REP2=$reponse2;  echo "Vous êtes maso"; break;;
esac
done

}
question3()
{
  echo -e  "\033[1;31m Combien pensez vous gagner?\033[0m "
  select reponse3  in "Des petits pains" "100 patates"
do
case $reponse3 in 
	"Des petits pains" ) REP3=$reponse3;  echo "Devenez boulanger"; break;; 
	"100 patates" ) REP3=$reponse3;  echo "Bienvenu à l'IT-Akademy"; break;;
esac
done
}





#Demander nom et prenon
echo -e "\033[1;31m Bonjour comment tu t'appelle ?\033[0m"
read NAME 
echo "Bonjour $NAME ,ton nom est vraiment.... Je vais t'appeller 010110"; 
sleep 1

#Commencer le questionnaire 
echo -e "\033[1;31m Alors 010110, pourquoi à tu choisie de devenir développeur ?\033[0m ";
sleep 1
select reponse1 in "Pour l'amour du code <3" "Pour l'argent bien sur"
do
case $reponse1  in 
    "Pour l'amour du code <3" ) REP1=$reponse1;  question2; break;;
    "Pour l'argent bien sur" ) REP1=$reponse1;  question3; break;;
esac
done;
sleep 2

#Stocker les données récoltés
REP42+=" $NAME"
REP42+=" $REP1"
REP42+=" $REP2"
REP42+=" $REP3"


#Demander le nom pour saugarder le fichier
echo " Entrer un nom pour saucegarder vos réponse "
read FILENAME

#Sauvegarder le fichier
echo $REP42 > ./$FILENAME




