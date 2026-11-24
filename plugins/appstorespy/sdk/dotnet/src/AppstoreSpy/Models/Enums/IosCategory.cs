using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IosCategory>))]
public sealed record IosCategory : OpenStringEnum<IosCategory>
{
    private IosCategory(string value) : base(value)
    {
    }

    public static readonly IosCategory Games = new("GAMES");

    public static readonly IosCategory GamesAction = new("GAMES_ACTION");

    public static readonly IosCategory GamesAdventure = new("GAMES_ADVENTURE");

    public static readonly IosCategory GamesArcade = new("GAMES_ARCADE");

    public static readonly IosCategory GamesBoard = new("GAMES_BOARD");

    public static readonly IosCategory GamesCard = new("GAMES_CARD");

    public static readonly IosCategory GamesCasino = new("GAMES_CASINO");

    public static readonly IosCategory GamesFamily = new("GAMES_FAMILY");

    public static readonly IosCategory GamesMusic = new("GAMES_MUSIC");

    public static readonly IosCategory GamesPuzzle = new("GAMES_PUZZLE");

    public static readonly IosCategory GamesRacing = new("GAMES_RACING");

    public static readonly IosCategory GamesRolePlaying = new("GAMES_ROLE_PLAYING");

    public static readonly IosCategory GamesSimulation = new("GAMES_SIMULATION");

    public static readonly IosCategory GamesSports = new("GAMES_SPORTS");

    public static readonly IosCategory GamesStrategy = new("GAMES_STRATEGY");

    public static readonly IosCategory GamesTrivia = new("GAMES_TRIVIA");

    public static readonly IosCategory GamesWord = new("GAMES_WORD");

    public static readonly IosCategory Books = new("BOOKS");

    public static readonly IosCategory Business = new("BUSINESS");

    public static readonly IosCategory Education = new("EDUCATION");

    public static readonly IosCategory Entertainment = new("ENTERTAINMENT");

    public static readonly IosCategory Finance = new("FINANCE");

    public static readonly IosCategory FoodAndDrink = new("FOOD_AND_DRINK");

    public static readonly IosCategory HealthAndFitness = new("HEALTH_AND_FITNESS");

    public static readonly IosCategory Lifestyle = new("LIFESTYLE");

    public static readonly IosCategory Medical = new("MEDICAL");

    public static readonly IosCategory Music = new("MUSIC");

    public static readonly IosCategory Navigation = new("NAVIGATION");

    public static readonly IosCategory News = new("NEWS");

    public static readonly IosCategory PhotoAndVideo = new("PHOTO_AND_VIDEO");

    public static readonly IosCategory Productivity = new("PRODUCTIVITY");

    public static readonly IosCategory Reference = new("REFERENCE");

    public static readonly IosCategory Shopping = new("SHOPPING");

    public static readonly IosCategory SocialNetworking = new("SOCIAL_NETWORKING");

    public static readonly IosCategory Sports = new("SPORTS");

    public static readonly IosCategory Travel = new("TRAVEL");

    public static readonly IosCategory Utilities = new("UTILITIES");

    public static readonly IosCategory Weather = new("WEATHER");

    public static readonly IosCategory DeveloperTools = new("DEVELOPER_TOOLS");

    public static readonly IosCategory GraphicsAndDesign = new("GRAPHICS_AND_DESIGN");

    public static readonly IosCategory All = new("ALL");

    public TResult Match<TResult>(Func<TResult> onGames,
        Func<TResult> onGamesAction,
        Func<TResult> onGamesAdventure,
        Func<TResult> onGamesArcade,
        Func<TResult> onGamesBoard,
        Func<TResult> onGamesCard,
        Func<TResult> onGamesCasino,
        Func<TResult> onGamesFamily,
        Func<TResult> onGamesMusic,
        Func<TResult> onGamesPuzzle,
        Func<TResult> onGamesRacing,
        Func<TResult> onGamesRolePlaying,
        Func<TResult> onGamesSimulation,
        Func<TResult> onGamesSports,
        Func<TResult> onGamesStrategy,
        Func<TResult> onGamesTrivia,
        Func<TResult> onGamesWord,
        Func<TResult> onBooks,
        Func<TResult> onBusiness,
        Func<TResult> onEducation,
        Func<TResult> onEntertainment,
        Func<TResult> onFinance,
        Func<TResult> onFoodAndDrink,
        Func<TResult> onHealthAndFitness,
        Func<TResult> onLifestyle,
        Func<TResult> onMedical,
        Func<TResult> onMusic,
        Func<TResult> onNavigation,
        Func<TResult> onNews,
        Func<TResult> onPhotoAndVideo,
        Func<TResult> onProductivity,
        Func<TResult> onReference,
        Func<TResult> onShopping,
        Func<TResult> onSocialNetworking,
        Func<TResult> onSports,
        Func<TResult> onTravel,
        Func<TResult> onUtilities,
        Func<TResult> onWeather,
        Func<TResult> onDeveloperTools,
        Func<TResult> onGraphicsAndDesign,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Games => onGames(),
            _ when this == GamesAction => onGamesAction(),
            _ when this == GamesAdventure => onGamesAdventure(),
            _ when this == GamesArcade => onGamesArcade(),
            _ when this == GamesBoard => onGamesBoard(),
            _ when this == GamesCard => onGamesCard(),
            _ when this == GamesCasino => onGamesCasino(),
            _ when this == GamesFamily => onGamesFamily(),
            _ when this == GamesMusic => onGamesMusic(),
            _ when this == GamesPuzzle => onGamesPuzzle(),
            _ when this == GamesRacing => onGamesRacing(),
            _ when this == GamesRolePlaying => onGamesRolePlaying(),
            _ when this == GamesSimulation => onGamesSimulation(),
            _ when this == GamesSports => onGamesSports(),
            _ when this == GamesStrategy => onGamesStrategy(),
            _ when this == GamesTrivia => onGamesTrivia(),
            _ when this == GamesWord => onGamesWord(),
            _ when this == Books => onBooks(),
            _ when this == Business => onBusiness(),
            _ when this == Education => onEducation(),
            _ when this == Entertainment => onEntertainment(),
            _ when this == Finance => onFinance(),
            _ when this == FoodAndDrink => onFoodAndDrink(),
            _ when this == HealthAndFitness => onHealthAndFitness(),
            _ when this == Lifestyle => onLifestyle(),
            _ when this == Medical => onMedical(),
            _ when this == Music => onMusic(),
            _ when this == Navigation => onNavigation(),
            _ when this == News => onNews(),
            _ when this == PhotoAndVideo => onPhotoAndVideo(),
            _ when this == Productivity => onProductivity(),
            _ when this == Reference => onReference(),
            _ when this == Shopping => onShopping(),
            _ when this == SocialNetworking => onSocialNetworking(),
            _ when this == Sports => onSports(),
            _ when this == Travel => onTravel(),
            _ when this == Utilities => onUtilities(),
            _ when this == Weather => onWeather(),
            _ when this == DeveloperTools => onDeveloperTools(),
            _ when this == GraphicsAndDesign => onGraphicsAndDesign(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onGames,
        Action onGamesAction,
        Action onGamesAdventure,
        Action onGamesArcade,
        Action onGamesBoard,
        Action onGamesCard,
        Action onGamesCasino,
        Action onGamesFamily,
        Action onGamesMusic,
        Action onGamesPuzzle,
        Action onGamesRacing,
        Action onGamesRolePlaying,
        Action onGamesSimulation,
        Action onGamesSports,
        Action onGamesStrategy,
        Action onGamesTrivia,
        Action onGamesWord,
        Action onBooks,
        Action onBusiness,
        Action onEducation,
        Action onEntertainment,
        Action onFinance,
        Action onFoodAndDrink,
        Action onHealthAndFitness,
        Action onLifestyle,
        Action onMedical,
        Action onMusic,
        Action onNavigation,
        Action onNews,
        Action onPhotoAndVideo,
        Action onProductivity,
        Action onReference,
        Action onShopping,
        Action onSocialNetworking,
        Action onSports,
        Action onTravel,
        Action onUtilities,
        Action onWeather,
        Action onDeveloperTools,
        Action onGraphicsAndDesign,
        Action onAll,
        Action<string> otherwise)
    {
        if (this == Games) onGames();
        else if (this == GamesAction) onGamesAction();
        else if (this == GamesAdventure) onGamesAdventure();
        else if (this == GamesArcade) onGamesArcade();
        else if (this == GamesBoard) onGamesBoard();
        else if (this == GamesCard) onGamesCard();
        else if (this == GamesCasino) onGamesCasino();
        else if (this == GamesFamily) onGamesFamily();
        else if (this == GamesMusic) onGamesMusic();
        else if (this == GamesPuzzle) onGamesPuzzle();
        else if (this == GamesRacing) onGamesRacing();
        else if (this == GamesRolePlaying) onGamesRolePlaying();
        else if (this == GamesSimulation) onGamesSimulation();
        else if (this == GamesSports) onGamesSports();
        else if (this == GamesStrategy) onGamesStrategy();
        else if (this == GamesTrivia) onGamesTrivia();
        else if (this == GamesWord) onGamesWord();
        else if (this == Books) onBooks();
        else if (this == Business) onBusiness();
        else if (this == Education) onEducation();
        else if (this == Entertainment) onEntertainment();
        else if (this == Finance) onFinance();
        else if (this == FoodAndDrink) onFoodAndDrink();
        else if (this == HealthAndFitness) onHealthAndFitness();
        else if (this == Lifestyle) onLifestyle();
        else if (this == Medical) onMedical();
        else if (this == Music) onMusic();
        else if (this == Navigation) onNavigation();
        else if (this == News) onNews();
        else if (this == PhotoAndVideo) onPhotoAndVideo();
        else if (this == Productivity) onProductivity();
        else if (this == Reference) onReference();
        else if (this == Shopping) onShopping();
        else if (this == SocialNetworking) onSocialNetworking();
        else if (this == Sports) onSports();
        else if (this == Travel) onTravel();
        else if (this == Utilities) onUtilities();
        else if (this == Weather) onWeather();
        else if (this == DeveloperTools) onDeveloperTools();
        else if (this == GraphicsAndDesign) onGraphicsAndDesign();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
