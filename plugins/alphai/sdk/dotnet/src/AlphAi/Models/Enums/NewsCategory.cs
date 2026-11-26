using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

/// <summary>
/// <c>market_movers</c> is for articles whose subject IS a notable price move ("AMD up 5% today"); <c>sector_analysis</c> is genuine sector-level analysis; <c>insider</c> covers SEC Form 4 insider transactions only. SEC 8-K filings categorize by their primary item: an earnings release (Item 2.02) is <c>earnings</c>, a completed acquisition or disposition (Item 2.01) is <c>mergers_acquisitions</c>, and the remaining events (material agreements, debt, executive changes, annual-meeting results, and since 2026-09-17 securities offerings, Regulation FD disclosures and other events under Items 7.01/8.01) are <c>corporate_actions</c>. A foreign private issuer's SEC 6-K appears only when it is an earnings release (<c>source</c> "SEC EDGAR 6-K") and is always <c>earnings</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NewsCategory>))]
public sealed record NewsCategory : OpenStringEnum<NewsCategory>
{
    private NewsCategory(string value) : base(value)
    {
    }

    public static readonly NewsCategory Earnings = new("earnings");

    public static readonly NewsCategory MergersAcquisitions = new("mergers_acquisitions");

    public static readonly NewsCategory Regulation = new("regulation");

    public static readonly NewsCategory MacroEconomy = new("macro_economy");

    public static readonly NewsCategory SectorAnalysis = new("sector_analysis");

    public static readonly NewsCategory MarketMovers = new("market_movers");

    public static readonly NewsCategory Technology = new("technology");

    public static readonly NewsCategory Commodities = new("commodities");

    public static readonly NewsCategory Crypto = new("crypto");

    public static readonly NewsCategory Ipo = new("ipo");

    public static readonly NewsCategory Geopolitics = new("geopolitics");

    public static readonly NewsCategory Insider = new("insider");

    public static readonly NewsCategory CorporateActions = new("corporate_actions");

    public static readonly NewsCategory Other = new("other");

    public TResult Match<TResult>(Func<TResult> onEarnings,
        Func<TResult> onMergersAcquisitions,
        Func<TResult> onRegulation,
        Func<TResult> onMacroEconomy,
        Func<TResult> onSectorAnalysis,
        Func<TResult> onMarketMovers,
        Func<TResult> onTechnology,
        Func<TResult> onCommodities,
        Func<TResult> onCrypto,
        Func<TResult> onIpo,
        Func<TResult> onGeopolitics,
        Func<TResult> onInsider,
        Func<TResult> onCorporateActions,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Earnings => onEarnings(),
            _ when this == MergersAcquisitions => onMergersAcquisitions(),
            _ when this == Regulation => onRegulation(),
            _ when this == MacroEconomy => onMacroEconomy(),
            _ when this == SectorAnalysis => onSectorAnalysis(),
            _ when this == MarketMovers => onMarketMovers(),
            _ when this == Technology => onTechnology(),
            _ when this == Commodities => onCommodities(),
            _ when this == Crypto => onCrypto(),
            _ when this == Ipo => onIpo(),
            _ when this == Geopolitics => onGeopolitics(),
            _ when this == Insider => onInsider(),
            _ when this == CorporateActions => onCorporateActions(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onEarnings,
        Action onMergersAcquisitions,
        Action onRegulation,
        Action onMacroEconomy,
        Action onSectorAnalysis,
        Action onMarketMovers,
        Action onTechnology,
        Action onCommodities,
        Action onCrypto,
        Action onIpo,
        Action onGeopolitics,
        Action onInsider,
        Action onCorporateActions,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Earnings) onEarnings();
        else if (this == MergersAcquisitions) onMergersAcquisitions();
        else if (this == Regulation) onRegulation();
        else if (this == MacroEconomy) onMacroEconomy();
        else if (this == SectorAnalysis) onSectorAnalysis();
        else if (this == MarketMovers) onMarketMovers();
        else if (this == Technology) onTechnology();
        else if (this == Commodities) onCommodities();
        else if (this == Crypto) onCrypto();
        else if (this == Ipo) onIpo();
        else if (this == Geopolitics) onGeopolitics();
        else if (this == Insider) onInsider();
        else if (this == CorporateActions) onCorporateActions();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
