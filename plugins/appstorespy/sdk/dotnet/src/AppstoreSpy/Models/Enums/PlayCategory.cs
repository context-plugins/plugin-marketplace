using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PlayCategory>))]
public sealed record PlayCategory : OpenStringEnum<PlayCategory>
{
    private PlayCategory(string value) : base(value)
    {
    }

    public static readonly PlayCategory Application = new("APPLICATION");

    public static readonly PlayCategory Social = new("SOCIAL");

    public static readonly PlayCategory Family = new("FAMILY");

    public static readonly PlayCategory AndroidWear = new("ANDROID_WEAR");

    public static readonly PlayCategory ArtAndDesign = new("ART_AND_DESIGN");

    public static readonly PlayCategory AutoAndVehicles = new("AUTO_AND_VEHICLES");

    public static readonly PlayCategory Beauty = new("BEAUTY");

    public static readonly PlayCategory BooksAndReference = new("BOOKS_AND_REFERENCE");

    public static readonly PlayCategory Business = new("BUSINESS");

    public static readonly PlayCategory Comics = new("COMICS");

    public static readonly PlayCategory Communication = new("COMMUNICATION");

    public static readonly PlayCategory Dating = new("DATING");

    public static readonly PlayCategory Education = new("EDUCATION");

    public static readonly PlayCategory Entertainment = new("ENTERTAINMENT");

    public static readonly PlayCategory Events = new("EVENTS");

    public static readonly PlayCategory Finance = new("FINANCE");

    public static readonly PlayCategory FoodAndDrink = new("FOOD_AND_DRINK");

    public static readonly PlayCategory HealthAndFitness = new("HEALTH_AND_FITNESS");

    public static readonly PlayCategory HouseAndHome = new("HOUSE_AND_HOME");

    public static readonly PlayCategory LibrariesAndDemo = new("LIBRARIES_AND_DEMO");

    public static readonly PlayCategory Lifestyle = new("LIFESTYLE");

    public static readonly PlayCategory MapsAndNavigation = new("MAPS_AND_NAVIGATION");

    public static readonly PlayCategory Medical = new("MEDICAL");

    public static readonly PlayCategory MusicAndAudio = new("MUSIC_AND_AUDIO");

    public static readonly PlayCategory NewsAndMagazines = new("NEWS_AND_MAGAZINES");

    public static readonly PlayCategory Parenting = new("PARENTING");

    public static readonly PlayCategory Personalization = new("PERSONALIZATION");

    public static readonly PlayCategory Photography = new("PHOTOGRAPHY");

    public static readonly PlayCategory Productivity = new("PRODUCTIVITY");

    public static readonly PlayCategory Shopping = new("SHOPPING");

    public static readonly PlayCategory Sports = new("SPORTS");

    public static readonly PlayCategory Tools = new("TOOLS");

    public static readonly PlayCategory TravelAndLocal = new("TRAVEL_AND_LOCAL");

    public static readonly PlayCategory VideoPlayers = new("VIDEO_PLAYERS");

    public static readonly PlayCategory Weather = new("WEATHER");

    public static readonly PlayCategory Game = new("GAME");

    public static readonly PlayCategory GameAction = new("GAME_ACTION");

    public static readonly PlayCategory GameAdventure = new("GAME_ADVENTURE");

    public static readonly PlayCategory GameArcade = new("GAME_ARCADE");

    public static readonly PlayCategory GameBoard = new("GAME_BOARD");

    public static readonly PlayCategory GameCard = new("GAME_CARD");

    public static readonly PlayCategory GameCasino = new("GAME_CASINO");

    public static readonly PlayCategory GameCasual = new("GAME_CASUAL");

    public static readonly PlayCategory GameEducational = new("GAME_EDUCATIONAL");

    public static readonly PlayCategory GameMusic = new("GAME_MUSIC");

    public static readonly PlayCategory GamePuzzle = new("GAME_PUZZLE");

    public static readonly PlayCategory GameRacing = new("GAME_RACING");

    public static readonly PlayCategory GameRolePlaying = new("GAME_ROLE_PLAYING");

    public static readonly PlayCategory GameSimulation = new("GAME_SIMULATION");

    public static readonly PlayCategory GameSports = new("GAME_SPORTS");

    public static readonly PlayCategory GameStrategy = new("GAME_STRATEGY");

    public static readonly PlayCategory GameTrivia = new("GAME_TRIVIA");

    public static readonly PlayCategory GameWord = new("GAME_WORD");

    public static readonly PlayCategory FamilyAction = new("FAMILY_ACTION");

    public static readonly PlayCategory FamilyBraingames = new("FAMILY_BRAINGAMES");

    public static readonly PlayCategory FamilyCreate = new("FAMILY_CREATE");

    public static readonly PlayCategory FamilyMusicvideo = new("FAMILY_MUSICVIDEO");

    public static readonly PlayCategory FamilyPretend = new("FAMILY_PRETEND");

    public static readonly PlayCategory FamilyEducation = new("FAMILY_EDUCATION");

    public TResult Match<TResult>(Func<TResult> onApplication,
        Func<TResult> onSocial,
        Func<TResult> onFamily,
        Func<TResult> onAndroidWear,
        Func<TResult> onArtAndDesign,
        Func<TResult> onAutoAndVehicles,
        Func<TResult> onBeauty,
        Func<TResult> onBooksAndReference,
        Func<TResult> onBusiness,
        Func<TResult> onComics,
        Func<TResult> onCommunication,
        Func<TResult> onDating,
        Func<TResult> onEducation,
        Func<TResult> onEntertainment,
        Func<TResult> onEvents,
        Func<TResult> onFinance,
        Func<TResult> onFoodAndDrink,
        Func<TResult> onHealthAndFitness,
        Func<TResult> onHouseAndHome,
        Func<TResult> onLibrariesAndDemo,
        Func<TResult> onLifestyle,
        Func<TResult> onMapsAndNavigation,
        Func<TResult> onMedical,
        Func<TResult> onMusicAndAudio,
        Func<TResult> onNewsAndMagazines,
        Func<TResult> onParenting,
        Func<TResult> onPersonalization,
        Func<TResult> onPhotography,
        Func<TResult> onProductivity,
        Func<TResult> onShopping,
        Func<TResult> onSports,
        Func<TResult> onTools,
        Func<TResult> onTravelAndLocal,
        Func<TResult> onVideoPlayers,
        Func<TResult> onWeather,
        Func<TResult> onGame,
        Func<TResult> onGameAction,
        Func<TResult> onGameAdventure,
        Func<TResult> onGameArcade,
        Func<TResult> onGameBoard,
        Func<TResult> onGameCard,
        Func<TResult> onGameCasino,
        Func<TResult> onGameCasual,
        Func<TResult> onGameEducational,
        Func<TResult> onGameMusic,
        Func<TResult> onGamePuzzle,
        Func<TResult> onGameRacing,
        Func<TResult> onGameRolePlaying,
        Func<TResult> onGameSimulation,
        Func<TResult> onGameSports,
        Func<TResult> onGameStrategy,
        Func<TResult> onGameTrivia,
        Func<TResult> onGameWord,
        Func<TResult> onFamilyAction,
        Func<TResult> onFamilyBraingames,
        Func<TResult> onFamilyCreate,
        Func<TResult> onFamilyMusicvideo,
        Func<TResult> onFamilyPretend,
        Func<TResult> onFamilyEducation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Application => onApplication(),
            _ when this == Social => onSocial(),
            _ when this == Family => onFamily(),
            _ when this == AndroidWear => onAndroidWear(),
            _ when this == ArtAndDesign => onArtAndDesign(),
            _ when this == AutoAndVehicles => onAutoAndVehicles(),
            _ when this == Beauty => onBeauty(),
            _ when this == BooksAndReference => onBooksAndReference(),
            _ when this == Business => onBusiness(),
            _ when this == Comics => onComics(),
            _ when this == Communication => onCommunication(),
            _ when this == Dating => onDating(),
            _ when this == Education => onEducation(),
            _ when this == Entertainment => onEntertainment(),
            _ when this == Events => onEvents(),
            _ when this == Finance => onFinance(),
            _ when this == FoodAndDrink => onFoodAndDrink(),
            _ when this == HealthAndFitness => onHealthAndFitness(),
            _ when this == HouseAndHome => onHouseAndHome(),
            _ when this == LibrariesAndDemo => onLibrariesAndDemo(),
            _ when this == Lifestyle => onLifestyle(),
            _ when this == MapsAndNavigation => onMapsAndNavigation(),
            _ when this == Medical => onMedical(),
            _ when this == MusicAndAudio => onMusicAndAudio(),
            _ when this == NewsAndMagazines => onNewsAndMagazines(),
            _ when this == Parenting => onParenting(),
            _ when this == Personalization => onPersonalization(),
            _ when this == Photography => onPhotography(),
            _ when this == Productivity => onProductivity(),
            _ when this == Shopping => onShopping(),
            _ when this == Sports => onSports(),
            _ when this == Tools => onTools(),
            _ when this == TravelAndLocal => onTravelAndLocal(),
            _ when this == VideoPlayers => onVideoPlayers(),
            _ when this == Weather => onWeather(),
            _ when this == Game => onGame(),
            _ when this == GameAction => onGameAction(),
            _ when this == GameAdventure => onGameAdventure(),
            _ when this == GameArcade => onGameArcade(),
            _ when this == GameBoard => onGameBoard(),
            _ when this == GameCard => onGameCard(),
            _ when this == GameCasino => onGameCasino(),
            _ when this == GameCasual => onGameCasual(),
            _ when this == GameEducational => onGameEducational(),
            _ when this == GameMusic => onGameMusic(),
            _ when this == GamePuzzle => onGamePuzzle(),
            _ when this == GameRacing => onGameRacing(),
            _ when this == GameRolePlaying => onGameRolePlaying(),
            _ when this == GameSimulation => onGameSimulation(),
            _ when this == GameSports => onGameSports(),
            _ when this == GameStrategy => onGameStrategy(),
            _ when this == GameTrivia => onGameTrivia(),
            _ when this == GameWord => onGameWord(),
            _ when this == FamilyAction => onFamilyAction(),
            _ when this == FamilyBraingames => onFamilyBraingames(),
            _ when this == FamilyCreate => onFamilyCreate(),
            _ when this == FamilyMusicvideo => onFamilyMusicvideo(),
            _ when this == FamilyPretend => onFamilyPretend(),
            _ when this == FamilyEducation => onFamilyEducation(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplication,
        Action onSocial,
        Action onFamily,
        Action onAndroidWear,
        Action onArtAndDesign,
        Action onAutoAndVehicles,
        Action onBeauty,
        Action onBooksAndReference,
        Action onBusiness,
        Action onComics,
        Action onCommunication,
        Action onDating,
        Action onEducation,
        Action onEntertainment,
        Action onEvents,
        Action onFinance,
        Action onFoodAndDrink,
        Action onHealthAndFitness,
        Action onHouseAndHome,
        Action onLibrariesAndDemo,
        Action onLifestyle,
        Action onMapsAndNavigation,
        Action onMedical,
        Action onMusicAndAudio,
        Action onNewsAndMagazines,
        Action onParenting,
        Action onPersonalization,
        Action onPhotography,
        Action onProductivity,
        Action onShopping,
        Action onSports,
        Action onTools,
        Action onTravelAndLocal,
        Action onVideoPlayers,
        Action onWeather,
        Action onGame,
        Action onGameAction,
        Action onGameAdventure,
        Action onGameArcade,
        Action onGameBoard,
        Action onGameCard,
        Action onGameCasino,
        Action onGameCasual,
        Action onGameEducational,
        Action onGameMusic,
        Action onGamePuzzle,
        Action onGameRacing,
        Action onGameRolePlaying,
        Action onGameSimulation,
        Action onGameSports,
        Action onGameStrategy,
        Action onGameTrivia,
        Action onGameWord,
        Action onFamilyAction,
        Action onFamilyBraingames,
        Action onFamilyCreate,
        Action onFamilyMusicvideo,
        Action onFamilyPretend,
        Action onFamilyEducation,
        Action<string> otherwise)
    {
        if (this == Application) onApplication();
        else if (this == Social) onSocial();
        else if (this == Family) onFamily();
        else if (this == AndroidWear) onAndroidWear();
        else if (this == ArtAndDesign) onArtAndDesign();
        else if (this == AutoAndVehicles) onAutoAndVehicles();
        else if (this == Beauty) onBeauty();
        else if (this == BooksAndReference) onBooksAndReference();
        else if (this == Business) onBusiness();
        else if (this == Comics) onComics();
        else if (this == Communication) onCommunication();
        else if (this == Dating) onDating();
        else if (this == Education) onEducation();
        else if (this == Entertainment) onEntertainment();
        else if (this == Events) onEvents();
        else if (this == Finance) onFinance();
        else if (this == FoodAndDrink) onFoodAndDrink();
        else if (this == HealthAndFitness) onHealthAndFitness();
        else if (this == HouseAndHome) onHouseAndHome();
        else if (this == LibrariesAndDemo) onLibrariesAndDemo();
        else if (this == Lifestyle) onLifestyle();
        else if (this == MapsAndNavigation) onMapsAndNavigation();
        else if (this == Medical) onMedical();
        else if (this == MusicAndAudio) onMusicAndAudio();
        else if (this == NewsAndMagazines) onNewsAndMagazines();
        else if (this == Parenting) onParenting();
        else if (this == Personalization) onPersonalization();
        else if (this == Photography) onPhotography();
        else if (this == Productivity) onProductivity();
        else if (this == Shopping) onShopping();
        else if (this == Sports) onSports();
        else if (this == Tools) onTools();
        else if (this == TravelAndLocal) onTravelAndLocal();
        else if (this == VideoPlayers) onVideoPlayers();
        else if (this == Weather) onWeather();
        else if (this == Game) onGame();
        else if (this == GameAction) onGameAction();
        else if (this == GameAdventure) onGameAdventure();
        else if (this == GameArcade) onGameArcade();
        else if (this == GameBoard) onGameBoard();
        else if (this == GameCard) onGameCard();
        else if (this == GameCasino) onGameCasino();
        else if (this == GameCasual) onGameCasual();
        else if (this == GameEducational) onGameEducational();
        else if (this == GameMusic) onGameMusic();
        else if (this == GamePuzzle) onGamePuzzle();
        else if (this == GameRacing) onGameRacing();
        else if (this == GameRolePlaying) onGameRolePlaying();
        else if (this == GameSimulation) onGameSimulation();
        else if (this == GameSports) onGameSports();
        else if (this == GameStrategy) onGameStrategy();
        else if (this == GameTrivia) onGameTrivia();
        else if (this == GameWord) onGameWord();
        else if (this == FamilyAction) onFamilyAction();
        else if (this == FamilyBraingames) onFamilyBraingames();
        else if (this == FamilyCreate) onFamilyCreate();
        else if (this == FamilyMusicvideo) onFamilyMusicvideo();
        else if (this == FamilyPretend) onFamilyPretend();
        else if (this == FamilyEducation) onFamilyEducation();
        else otherwise(Value);
    }
}
