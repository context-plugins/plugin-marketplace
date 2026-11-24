using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Signal1>))]
public sealed record Signal1 : OpenStringEnum<Signal1>
{
    private Signal1(string value) : base(value)
    {
    }

    public static readonly Signal1 AllSignals = new("allSignals");

    public static readonly Signal1 WebsiteTrafficIncrease = new("websiteTrafficIncrease");

    public static readonly Signal1 WebsiteTrafficDecrease = new("websiteTrafficDecrease");

    public static readonly Signal1 ItSpendIncrease = new("itSpendIncrease");

    public static readonly Signal1 ItSpendDecrease = new("itSpendDecrease");

    public static readonly Signal1 HeadcountIncrease1M = new("headcountIncrease1m");

    public static readonly Signal1 HeadcountDecrease1M = new("headcountDecrease1m");

    public static readonly Signal1 HeadcountIncrease3M = new("headcountIncrease3m");

    public static readonly Signal1 HeadcountDecrease3M = new("headcountDecrease3m");

    public static readonly Signal1 HeadcountIncrease6M = new("headcountIncrease6m");

    public static readonly Signal1 HeadcountDecrease6M = new("headcountDecrease6m");

    public static readonly Signal1 HeadcountIncrease12M = new("headcountIncrease12m");

    public static readonly Signal1 HeadcountDecrease12M = new("headcountDecrease12m");

    public static readonly Signal1 SurgeInHiring = new("surgeInHiring");

    public static readonly Signal1 SurgeInHiringByDepartment = new("surgeInHiringByDepartment");

    public static readonly Signal1 SurgeInHiringByLocation = new("surgeInHiringByLocation");

    public static readonly Signal1 RiskNews = new("riskNews");

    public static readonly Signal1 CommercialActivityNews = new("commercialActivityNews");

    public static readonly Signal1 CorporateStrategyNews = new("corporateStrategyNews");

    public static readonly Signal1 FinancialEventsNews = new("financialEventsNews");

    public static readonly Signal1 PeopleNews = new("peopleNews");

    public static readonly Signal1 MarketIntelligenceNews = new("marketIntelligenceNews");

    public static readonly Signal1 ProductActivityNews = new("productActivityNews");

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
