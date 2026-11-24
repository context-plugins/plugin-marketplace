using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NameLushaApiDocumentationProspectingSearchEnrichApi>))]
public sealed record NameLushaApiDocumentationProspectingSearchEnrichApi : OpenStringEnum<NameLushaApiDocumentationProspectingSearchEnrichApi>
{
    private NameLushaApiDocumentationProspectingSearchEnrichApi(string value) : base(value)
    {
    }

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi AllSignals = new("allSignals");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi WebsiteTrafficIncrease = new(
        "websiteTrafficIncrease");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi WebsiteTrafficDecrease = new(
        "websiteTrafficDecrease");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi ItSpendIncrease = new("itSpendIncrease");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi ItSpendDecrease = new("itSpendDecrease");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi HeadcountIncrease1M = new(
        "headcountIncrease1m");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi HeadcountDecrease1M = new(
        "headcountDecrease1m");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi HeadcountIncrease3M = new(
        "headcountIncrease3m");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi HeadcountDecrease3M = new(
        "headcountDecrease3m");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi HeadcountIncrease6M = new(
        "headcountIncrease6m");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi HeadcountDecrease6M = new(
        "headcountDecrease6m");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi HeadcountIncrease12M = new(
        "headcountIncrease12m");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi HeadcountDecrease12M = new(
        "headcountDecrease12m");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi SurgeInHiring = new("surgeInHiring");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi SurgeInHiringByDepartment = new(
        "surgeInHiringByDepartment");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi SurgeInHiringByLocation = new(
        "surgeInHiringByLocation");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi RiskNews = new("riskNews");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi CommercialActivityNews = new(
        "commercialActivityNews");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi CorporateStrategyNews = new(
        "corporateStrategyNews");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi FinancialEventsNews = new(
        "financialEventsNews");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi PeopleNews = new("peopleNews");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi MarketIntelligenceNews = new(
        "marketIntelligenceNews");

    public static readonly NameLushaApiDocumentationProspectingSearchEnrichApi ProductActivityNews = new(
        "productActivityNews");

    public TResult Match<TResult>(Func<TResult> onAllSignals,
        Func<TResult> onWebsiteTrafficIncrease,
        Func<TResult> onWebsiteTrafficDecrease,
        Func<TResult> onItSpendIncrease,
        Func<TResult> onItSpendDecrease,
        Func<TResult> onHeadcountIncrease1M,
        Func<TResult> onHeadcountDecrease1M,
        Func<TResult> onHeadcountIncrease3M,
        Func<TResult> onHeadcountDecrease3M,
        Func<TResult> onHeadcountIncrease6M,
        Func<TResult> onHeadcountDecrease6M,
        Func<TResult> onHeadcountIncrease12M,
        Func<TResult> onHeadcountDecrease12M,
        Func<TResult> onSurgeInHiring,
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
            _ when this == WebsiteTrafficIncrease => onWebsiteTrafficIncrease(),
            _ when this == WebsiteTrafficDecrease => onWebsiteTrafficDecrease(),
            _ when this == ItSpendIncrease => onItSpendIncrease(),
            _ when this == ItSpendDecrease => onItSpendDecrease(),
            _ when this == HeadcountIncrease1M => onHeadcountIncrease1M(),
            _ when this == HeadcountDecrease1M => onHeadcountDecrease1M(),
            _ when this == HeadcountIncrease3M => onHeadcountIncrease3M(),
            _ when this == HeadcountDecrease3M => onHeadcountDecrease3M(),
            _ when this == HeadcountIncrease6M => onHeadcountIncrease6M(),
            _ when this == HeadcountDecrease6M => onHeadcountDecrease6M(),
            _ when this == HeadcountIncrease12M => onHeadcountIncrease12M(),
            _ when this == HeadcountDecrease12M => onHeadcountDecrease12M(),
            _ when this == SurgeInHiring => onSurgeInHiring(),
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
        Action onWebsiteTrafficIncrease,
        Action onWebsiteTrafficDecrease,
        Action onItSpendIncrease,
        Action onItSpendDecrease,
        Action onHeadcountIncrease1M,
        Action onHeadcountDecrease1M,
        Action onHeadcountIncrease3M,
        Action onHeadcountDecrease3M,
        Action onHeadcountIncrease6M,
        Action onHeadcountDecrease6M,
        Action onHeadcountIncrease12M,
        Action onHeadcountDecrease12M,
        Action onSurgeInHiring,
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
        else if (this == WebsiteTrafficIncrease) onWebsiteTrafficIncrease();
        else if (this == WebsiteTrafficDecrease) onWebsiteTrafficDecrease();
        else if (this == ItSpendIncrease) onItSpendIncrease();
        else if (this == ItSpendDecrease) onItSpendDecrease();
        else if (this == HeadcountIncrease1M) onHeadcountIncrease1M();
        else if (this == HeadcountDecrease1M) onHeadcountDecrease1M();
        else if (this == HeadcountIncrease3M) onHeadcountIncrease3M();
        else if (this == HeadcountDecrease3M) onHeadcountDecrease3M();
        else if (this == HeadcountIncrease6M) onHeadcountIncrease6M();
        else if (this == HeadcountDecrease6M) onHeadcountDecrease6M();
        else if (this == HeadcountIncrease12M) onHeadcountIncrease12M();
        else if (this == HeadcountDecrease12M) onHeadcountDecrease12M();
        else if (this == SurgeInHiring) onSurgeInHiring();
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
