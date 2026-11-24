using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EventKey>))]
public sealed record EventKey : OpenStringEnum<EventKey>
{
    private EventKey(string value) : base(value)
    {
    }

    public static readonly EventKey FomcDecision = new("fomc_decision");

    public static readonly EventKey FomcMinutes = new("fomc_minutes");

    public static readonly EventKey Cpi = new("cpi");

    public static readonly EventKey Ppi = new("ppi");

    public static readonly EventKey Nfp = new("nfp");

    public static readonly EventKey Gdp = new("gdp");

    public static readonly EventKey Pce = new("pce");

    public static readonly EventKey RetailSales = new("retail_sales");

    public static readonly EventKey JoblessClaims = new("jobless_claims");

    public static readonly EventKey Jolts = new("jolts");

    public TResult Match<TResult>(Func<TResult> onFomcDecision,
        Func<TResult> onFomcMinutes,
        Func<TResult> onCpi,
        Func<TResult> onPpi,
        Func<TResult> onNfp,
        Func<TResult> onGdp,
        Func<TResult> onPce,
        Func<TResult> onRetailSales,
        Func<TResult> onJoblessClaims,
        Func<TResult> onJolts,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FomcDecision => onFomcDecision(),
            _ when this == FomcMinutes => onFomcMinutes(),
            _ when this == Cpi => onCpi(),
            _ when this == Ppi => onPpi(),
            _ when this == Nfp => onNfp(),
            _ when this == Gdp => onGdp(),
            _ when this == Pce => onPce(),
            _ when this == RetailSales => onRetailSales(),
            _ when this == JoblessClaims => onJoblessClaims(),
            _ when this == Jolts => onJolts(),
            _ => otherwise(Value)
        };

    public void Match(Action onFomcDecision,
        Action onFomcMinutes,
        Action onCpi,
        Action onPpi,
        Action onNfp,
        Action onGdp,
        Action onPce,
        Action onRetailSales,
        Action onJoblessClaims,
        Action onJolts,
        Action<string> otherwise)
    {
        if (this == FomcDecision) onFomcDecision();
        else if (this == FomcMinutes) onFomcMinutes();
        else if (this == Cpi) onCpi();
        else if (this == Ppi) onPpi();
        else if (this == Nfp) onNfp();
        else if (this == Gdp) onGdp();
        else if (this == Pce) onPce();
        else if (this == RetailSales) onRetailSales();
        else if (this == JoblessClaims) onJoblessClaims();
        else if (this == Jolts) onJolts();
        else otherwise(Value);
    }
}
