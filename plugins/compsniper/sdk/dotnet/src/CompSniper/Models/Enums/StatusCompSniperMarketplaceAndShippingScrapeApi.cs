using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusCompSniperMarketplaceAndShippingScrapeApi>))]
public sealed record StatusCompSniperMarketplaceAndShippingScrapeApi : OpenStringEnum<StatusCompSniperMarketplaceAndShippingScrapeApi>
{
    private StatusCompSniperMarketplaceAndShippingScrapeApi(string value) : base(value)
    {
    }

    public static readonly StatusCompSniperMarketplaceAndShippingScrapeApi Queued = new("queued");

    public static readonly StatusCompSniperMarketplaceAndShippingScrapeApi Running = new("running");

    public static readonly StatusCompSniperMarketplaceAndShippingScrapeApi Done = new("done");

    public static readonly StatusCompSniperMarketplaceAndShippingScrapeApi MaxPagesReached = new("maxPages_reached");

    public static readonly StatusCompSniperMarketplaceAndShippingScrapeApi Cancelled = new("cancelled");

    public static readonly StatusCompSniperMarketplaceAndShippingScrapeApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onRunning,
        Func<TResult> onDone,
        Func<TResult> onMaxPagesReached,
        Func<TResult> onCancelled,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Running => onRunning(),
            _ when this == Done => onDone(),
            _ when this == MaxPagesReached => onMaxPagesReached(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onRunning,
        Action onDone,
        Action onMaxPagesReached,
        Action onCancelled,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Running) onRunning();
        else if (this == Done) onDone();
        else if (this == MaxPagesReached) onMaxPagesReached();
        else if (this == Cancelled) onCancelled();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
