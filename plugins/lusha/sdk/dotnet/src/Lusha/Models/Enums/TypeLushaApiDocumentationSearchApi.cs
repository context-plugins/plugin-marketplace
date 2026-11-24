using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeLushaApiDocumentationSearchApi>))]
public sealed record TypeLushaApiDocumentationSearchApi : OpenStringEnum<TypeLushaApiDocumentationSearchApi>
{
    private TypeLushaApiDocumentationSearchApi(string value) : base(value)
    {
    }

    public static readonly TypeLushaApiDocumentationSearchApi AllSignals = new("allSignals");

    public static readonly TypeLushaApiDocumentationSearchApi LinkedinActivityIntent = new("linkedinActivityIntent");

    public static readonly TypeLushaApiDocumentationSearchApi WebsiteTrafficDecrease = new("websiteTrafficDecrease");

    public static readonly TypeLushaApiDocumentationSearchApi WebsiteTrafficIncrease = new("websiteTrafficIncrease");

    public static readonly TypeLushaApiDocumentationSearchApi ItSpendIncrease = new("itSpendIncrease");

    public static readonly TypeLushaApiDocumentationSearchApi ItSpendDecrease = new("itSpendDecrease");

    public static readonly TypeLushaApiDocumentationSearchApi SurgeInHiring = new("surgeInHiring");

    public static readonly TypeLushaApiDocumentationSearchApi HeadcountIncrease1M = new("headcountIncrease1m");

    public static readonly TypeLushaApiDocumentationSearchApi HeadcountIncrease3M = new("headcountIncrease3m");

    public static readonly TypeLushaApiDocumentationSearchApi HeadcountIncrease6M = new("headcountIncrease6m");

    public static readonly TypeLushaApiDocumentationSearchApi HeadcountIncrease12M = new("headcountIncrease12m");

    public static readonly TypeLushaApiDocumentationSearchApi HeadcountDecrease1M = new("headcountDecrease1m");

    public static readonly TypeLushaApiDocumentationSearchApi HeadcountDecrease3M = new("headcountDecrease3m");

    public static readonly TypeLushaApiDocumentationSearchApi HeadcountDecrease6M = new("headcountDecrease6m");

    public static readonly TypeLushaApiDocumentationSearchApi HeadcountDecrease12M = new("headcountDecrease12m");

    public static readonly TypeLushaApiDocumentationSearchApi SurgeInHiringByDepartment = new(
        "surgeInHiringByDepartment");

    public static readonly TypeLushaApiDocumentationSearchApi SurgeInHiringByLocation = new("surgeInHiringByLocation");

    public static readonly TypeLushaApiDocumentationSearchApi RiskNews = new("riskNews");

    public static readonly TypeLushaApiDocumentationSearchApi CommercialActivityNews = new("commercialActivityNews");

    public static readonly TypeLushaApiDocumentationSearchApi CorporateStrategyNews = new("corporateStrategyNews");

    public static readonly TypeLushaApiDocumentationSearchApi FinancialEventsNews = new("financialEventsNews");

    public static readonly TypeLushaApiDocumentationSearchApi PeopleNews = new("peopleNews");

    public static readonly TypeLushaApiDocumentationSearchApi MarketIntelligenceNews = new("marketIntelligenceNews");

    public static readonly TypeLushaApiDocumentationSearchApi ProductActivityNews = new("productActivityNews");

    public TResult Match<TResult>(Func<TResult> onAllSignals,
        Func<TResult> onLinkedinActivityIntent,
        Func<TResult> onWebsiteTrafficDecrease,
        Func<TResult> onWebsiteTrafficIncrease,
        Func<TResult> onItSpendIncrease,
        Func<TResult> onItSpendDecrease,
        Func<TResult> onSurgeInHiring,
        Func<TResult> onHeadcountIncrease1M,
        Func<TResult> onHeadcountIncrease3M,
        Func<TResult> onHeadcountIncrease6M,
        Func<TResult> onHeadcountIncrease12M,
        Func<TResult> onHeadcountDecrease1M,
        Func<TResult> onHeadcountDecrease3M,
        Func<TResult> onHeadcountDecrease6M,
        Func<TResult> onHeadcountDecrease12M,
        Func<TResult> onSurgeInHiringByDepartment,
        Func<TResult> onSurgeInHiringByLocation,
        Func<TResult> onRiskNews,
        Func<TResult> onCommercialActivityNews,
        Func<TResult> onCorporateStrategyNews,
        Func<TResult> onFinancialEventsNews,
        Func<TResult> onPeopleNews,
        Func<TResult> onMarketIntelligenceNews,
        Func<TResult> onProductActivityNews,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AllSignals => onAllSignals(),
            _ when this == LinkedinActivityIntent => onLinkedinActivityIntent(),
            _ when this == WebsiteTrafficDecrease => onWebsiteTrafficDecrease(),
            _ when this == WebsiteTrafficIncrease => onWebsiteTrafficIncrease(),
            _ when this == ItSpendIncrease => onItSpendIncrease(),
            _ when this == ItSpendDecrease => onItSpendDecrease(),
            _ when this == SurgeInHiring => onSurgeInHiring(),
            _ when this == HeadcountIncrease1M => onHeadcountIncrease1M(),
            _ when this == HeadcountIncrease3M => onHeadcountIncrease3M(),
            _ when this == HeadcountIncrease6M => onHeadcountIncrease6M(),
            _ when this == HeadcountIncrease12M => onHeadcountIncrease12M(),
            _ when this == HeadcountDecrease1M => onHeadcountDecrease1M(),
            _ when this == HeadcountDecrease3M => onHeadcountDecrease3M(),
            _ when this == HeadcountDecrease6M => onHeadcountDecrease6M(),
            _ when this == HeadcountDecrease12M => onHeadcountDecrease12M(),
            _ when this == SurgeInHiringByDepartment => onSurgeInHiringByDepartment(),
            _ when this == SurgeInHiringByLocation => onSurgeInHiringByLocation(),
            _ when this == RiskNews => onRiskNews(),
            _ when this == CommercialActivityNews => onCommercialActivityNews(),
            _ when this == CorporateStrategyNews => onCorporateStrategyNews(),
            _ when this == FinancialEventsNews => onFinancialEventsNews(),
            _ when this == PeopleNews => onPeopleNews(),
            _ when this == MarketIntelligenceNews => onMarketIntelligenceNews(),
            _ when this == ProductActivityNews => onProductActivityNews(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllSignals,
        Action onLinkedinActivityIntent,
        Action onWebsiteTrafficDecrease,
        Action onWebsiteTrafficIncrease,
        Action onItSpendIncrease,
        Action onItSpendDecrease,
        Action onSurgeInHiring,
        Action onHeadcountIncrease1M,
        Action onHeadcountIncrease3M,
        Action onHeadcountIncrease6M,
        Action onHeadcountIncrease12M,
        Action onHeadcountDecrease1M,
        Action onHeadcountDecrease3M,
        Action onHeadcountDecrease6M,
        Action onHeadcountDecrease12M,
        Action onSurgeInHiringByDepartment,
        Action onSurgeInHiringByLocation,
        Action onRiskNews,
        Action onCommercialActivityNews,
        Action onCorporateStrategyNews,
        Action onFinancialEventsNews,
        Action onPeopleNews,
        Action onMarketIntelligenceNews,
        Action onProductActivityNews,
        Action<string> otherwise)
    {
        if (this == AllSignals) onAllSignals();
        else if (this == LinkedinActivityIntent) onLinkedinActivityIntent();
        else if (this == WebsiteTrafficDecrease) onWebsiteTrafficDecrease();
        else if (this == WebsiteTrafficIncrease) onWebsiteTrafficIncrease();
        else if (this == ItSpendIncrease) onItSpendIncrease();
        else if (this == ItSpendDecrease) onItSpendDecrease();
        else if (this == SurgeInHiring) onSurgeInHiring();
        else if (this == HeadcountIncrease1M) onHeadcountIncrease1M();
        else if (this == HeadcountIncrease3M) onHeadcountIncrease3M();
        else if (this == HeadcountIncrease6M) onHeadcountIncrease6M();
        else if (this == HeadcountIncrease12M) onHeadcountIncrease12M();
        else if (this == HeadcountDecrease1M) onHeadcountDecrease1M();
        else if (this == HeadcountDecrease3M) onHeadcountDecrease3M();
        else if (this == HeadcountDecrease6M) onHeadcountDecrease6M();
        else if (this == HeadcountDecrease12M) onHeadcountDecrease12M();
        else if (this == SurgeInHiringByDepartment) onSurgeInHiringByDepartment();
        else if (this == SurgeInHiringByLocation) onSurgeInHiringByLocation();
        else if (this == RiskNews) onRiskNews();
        else if (this == CommercialActivityNews) onCommercialActivityNews();
        else if (this == CorporateStrategyNews) onCorporateStrategyNews();
        else if (this == FinancialEventsNews) onFinancialEventsNews();
        else if (this == PeopleNews) onPeopleNews();
        else if (this == MarketIntelligenceNews) onMarketIntelligenceNews();
        else if (this == ProductActivityNews) onProductActivityNews();
        else otherwise(Value);
    }
}
