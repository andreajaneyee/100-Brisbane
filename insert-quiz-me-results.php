<?php
	session_start();


	$hostname = "localhost";
	$database = "questionnaire";
	$username = "girlband";
	$password = "girlband";


    // Question 1 Variables
    switch($_POST['gender']){
        case "male": $gender = "male"; break;
        case "female": $gender = "female"; break;
        case "otherGender": $gender = "otherGender"; break;
        default: echo("Error!"); exit(); break;
	}

    // Question 2 Variables

    switch($_POST['age']){
        case "0-5": $age = "0-5"; break;
        case "6-12": $age = "6-12"; break;
        case "13-17": $age = "13-17"; break;
        case "18-24": $gender = "18-24"; break;
        case "25-34": $gender = "25-34"; break;
        case "35-44": $gender = "35-44"; break;
        case "45-54": $gender = "45-54"; break;
        case "55-64": $gender = "55-64"; break;
        case "65+": $gender = "65+"; break;
        default: echo("Error!"); exit(); break;
	}

    // Question 3 Variables
    switch($_POST['live']){
        case "innerCity": $live = "innerCity"; break;
        case "innerNorth": $live = "innerNorth"; break;
        case "innerSouth": $live = "innerSouth"; break;
        case "innerEast": $live = "innerEast"; break;
        case "innerWest": $live = "innerWest"; break;
        case "northEast": $live = "northEast"; break;
        case "northWest": $live = "northWest"; break;
        case "south": $live = "south"; break;
        case "southEast": $live = "southEast"; break;
        case "southWest": $live = "southWest"; break;
        case "outerWest": $live = "outerWest"; break;
        case "bayside": $live = "bayside"; break;
        case "notBrisbane": $live = "notBrisbane"; break;
        case "overseas": $live = "overseas"; break;
        default: echo("Error!"); exit(); break;
	}

    // Question 4 Variables
    switch($_POST['born']){
        case "australia": $born = "australia"; break;
        case "pacific": $born = "pacific"; break;
        case "uk": $born = "uk"; break;
        case "europe": $born = "europe"; break;
        case "neAsia": $born = "neAsia"; break;
        case "seAsia": $born = "seAsia"; break;
        case "centralAsia": $born = "centralAsia"; break;
        case "africa": $born = "africa"; break;
        case "americas": $born = "americas"; break;
        default: echo("Error!"); exit(); break;
	}

    // Question 5 Variables
    switch($_POST['family']){
        case "noChildren": $family = "noChildren"; break;
        case "children": $family = "children"; break;
        case "oneParent": $family = "oneParent"; break;
        case "single": $family = "single"; break;
        case "otherFamily": $family = "otherFamily"; break;
        default: echo("Error!"); exit(); break;
	}

    // Connection to database
    $conn = new PDO('mysql:host ='.$hostname.'; dbname='.$database, $username, $password);

    // Insert into database
    $query = $conn->prepare("INSERT INTO me (gender, age, district, birth_place, household) VALUES (:gender, :age, :live, :born, :family)");

	$query ->bindParam(':gender', $gender);
	$query ->bindParam(':age', $age);
	$query ->bindParam(':live', $live);
	$query ->bindParam(':born', $born);
    $query ->bindParam(':family', $family);
	$query ->execute();

    header("location: index.html");



?>
