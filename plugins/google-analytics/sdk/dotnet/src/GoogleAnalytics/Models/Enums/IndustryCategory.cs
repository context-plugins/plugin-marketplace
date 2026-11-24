using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IndustryCategory>))]
public sealed record IndustryCategory : OpenStringEnum<IndustryCategory>
{
    private IndustryCategory(string value) : base(value)
    {
    }

    public static readonly IndustryCategory IndustryCategoryUnspecified = new("INDUSTRY_CATEGORY_UNSPECIFIED");

    public static readonly IndustryCategory Automotive = new("AUTOMOTIVE");

    public static readonly IndustryCategory BusinessAndIndustrialMarkets = new("BUSINESS_AND_INDUSTRIAL_MARKETS");

    public static readonly IndustryCategory Finance = new("FINANCE");

    public static readonly IndustryCategory Healthcare = new("HEALTHCARE");

    public static readonly IndustryCategory Technology = new("TECHNOLOGY");

    public static readonly IndustryCategory Travel = new("TRAVEL");

    public static readonly IndustryCategory Other = new("OTHER");

    public static readonly IndustryCategory ArtsAndEntertainment = new("ARTS_AND_ENTERTAINMENT");

    public static readonly IndustryCategory BeautyAndFitness = new("BEAUTY_AND_FITNESS");

    public static readonly IndustryCategory BooksAndLiterature = new("BOOKS_AND_LITERATURE");

    public static readonly IndustryCategory FoodAndDrink = new("FOOD_AND_DRINK");

    public static readonly IndustryCategory Games = new("GAMES");

    public static readonly IndustryCategory HobbiesAndLeisure = new("HOBBIES_AND_LEISURE");

    public static readonly IndustryCategory HomeAndGarden = new("HOME_AND_GARDEN");

    public static readonly IndustryCategory InternetAndTelecom = new("INTERNET_AND_TELECOM");

    public static readonly IndustryCategory LawAndGovernment = new("LAW_AND_GOVERNMENT");

    public static readonly IndustryCategory News = new("NEWS");

    public static readonly IndustryCategory OnlineCommunities = new("ONLINE_COMMUNITIES");

    public static readonly IndustryCategory PeopleAndSociety = new("PEOPLE_AND_SOCIETY");

    public static readonly IndustryCategory PetsAndAnimals = new("PETS_AND_ANIMALS");

    public static readonly IndustryCategory RealEstate = new("REAL_ESTATE");

    public static readonly IndustryCategory Reference = new("REFERENCE");

    public static readonly IndustryCategory Science = new("SCIENCE");

    public static readonly IndustryCategory Sports = new("SPORTS");

    public static readonly IndustryCategory JobsAndEducation = new("JOBS_AND_EDUCATION");

    public static readonly IndustryCategory Shopping = new("SHOPPING");

    public TResult Match<TResult>(Func<TResult> onIndustryCategoryUnspecified,
        Func<TResult> onAutomotive,
        Func<TResult> onBusinessAndIndustrialMarkets,
        Func<TResult> onFinance,
        Func<TResult> onHealthcare,
        Func<TResult> onTechnology,
        Func<TResult> onTravel,
        Func<TResult> onOther,
        Func<TResult> onArtsAndEntertainment,
        Func<TResult> onBeautyAndFitness,
        Func<TResult> onBooksAndLiterature,
        Func<TResult> onFoodAndDrink,
        Func<TResult> onGames,
        Func<TResult> onHobbiesAndLeisure,
        Func<TResult> onHomeAndGarden,
        Func<TResult> onInternetAndTelecom,
        Func<TResult> onLawAndGovernment,
        Func<TResult> onNews,
        Func<TResult> onOnlineCommunities,
        Func<TResult> onPeopleAndSociety,
        Func<TResult> onPetsAndAnimals,
        Func<TResult> onRealEstate,
        Func<TResult> onReference,
        Func<TResult> onScience,
        Func<TResult> onSports,
        Func<TResult> onJobsAndEducation,
        Func<TResult> onShopping,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IndustryCategoryUnspecified => onIndustryCategoryUnspecified(),
            _ when this == Automotive => onAutomotive(),
            _ when this == BusinessAndIndustrialMarkets => onBusinessAndIndustrialMarkets(),
            _ when this == Finance => onFinance(),
            _ when this == Healthcare => onHealthcare(),
            _ when this == Technology => onTechnology(),
            _ when this == Travel => onTravel(),
            _ when this == Other => onOther(),
            _ when this == ArtsAndEntertainment => onArtsAndEntertainment(),
            _ when this == BeautyAndFitness => onBeautyAndFitness(),
            _ when this == BooksAndLiterature => onBooksAndLiterature(),
            _ when this == FoodAndDrink => onFoodAndDrink(),
            _ when this == Games => onGames(),
            _ when this == HobbiesAndLeisure => onHobbiesAndLeisure(),
            _ when this == HomeAndGarden => onHomeAndGarden(),
            _ when this == InternetAndTelecom => onInternetAndTelecom(),
            _ when this == LawAndGovernment => onLawAndGovernment(),
            _ when this == News => onNews(),
            _ when this == OnlineCommunities => onOnlineCommunities(),
            _ when this == PeopleAndSociety => onPeopleAndSociety(),
            _ when this == PetsAndAnimals => onPetsAndAnimals(),
            _ when this == RealEstate => onRealEstate(),
            _ when this == Reference => onReference(),
            _ when this == Science => onScience(),
            _ when this == Sports => onSports(),
            _ when this == JobsAndEducation => onJobsAndEducation(),
            _ when this == Shopping => onShopping(),
            _ => otherwise(Value)
        };

    public void Match(Action onIndustryCategoryUnspecified,
        Action onAutomotive,
        Action onBusinessAndIndustrialMarkets,
        Action onFinance,
        Action onHealthcare,
        Action onTechnology,
        Action onTravel,
        Action onOther,
        Action onArtsAndEntertainment,
        Action onBeautyAndFitness,
        Action onBooksAndLiterature,
        Action onFoodAndDrink,
        Action onGames,
        Action onHobbiesAndLeisure,
        Action onHomeAndGarden,
        Action onInternetAndTelecom,
        Action onLawAndGovernment,
        Action onNews,
        Action onOnlineCommunities,
        Action onPeopleAndSociety,
        Action onPetsAndAnimals,
        Action onRealEstate,
        Action onReference,
        Action onScience,
        Action onSports,
        Action onJobsAndEducation,
        Action onShopping,
        Action<string> otherwise)
    {
        if (this == IndustryCategoryUnspecified) onIndustryCategoryUnspecified();
        else if (this == Automotive) onAutomotive();
        else if (this == BusinessAndIndustrialMarkets) onBusinessAndIndustrialMarkets();
        else if (this == Finance) onFinance();
        else if (this == Healthcare) onHealthcare();
        else if (this == Technology) onTechnology();
        else if (this == Travel) onTravel();
        else if (this == Other) onOther();
        else if (this == ArtsAndEntertainment) onArtsAndEntertainment();
        else if (this == BeautyAndFitness) onBeautyAndFitness();
        else if (this == BooksAndLiterature) onBooksAndLiterature();
        else if (this == FoodAndDrink) onFoodAndDrink();
        else if (this == Games) onGames();
        else if (this == HobbiesAndLeisure) onHobbiesAndLeisure();
        else if (this == HomeAndGarden) onHomeAndGarden();
        else if (this == InternetAndTelecom) onInternetAndTelecom();
        else if (this == LawAndGovernment) onLawAndGovernment();
        else if (this == News) onNews();
        else if (this == OnlineCommunities) onOnlineCommunities();
        else if (this == PeopleAndSociety) onPeopleAndSociety();
        else if (this == PetsAndAnimals) onPetsAndAnimals();
        else if (this == RealEstate) onRealEstate();
        else if (this == Reference) onReference();
        else if (this == Science) onScience();
        else if (this == Sports) onSports();
        else if (this == JobsAndEducation) onJobsAndEducation();
        else if (this == Shopping) onShopping();
        else otherwise(Value);
    }
}
