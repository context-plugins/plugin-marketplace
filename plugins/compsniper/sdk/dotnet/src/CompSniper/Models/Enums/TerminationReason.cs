using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TerminationReason>))]
public sealed record TerminationReason : OpenStringEnum<TerminationReason>
{
    private TerminationReason(string value) : base(value)
    {
    }

    public static readonly TerminationReason NaturalEnd = new("natural_end");

    public static readonly TerminationReason MaxPagesReached = new("maxPages_reached");

    public static readonly TerminationReason QuotaExhausted = new("quota_exhausted");

    public static readonly TerminationReason UpstreamUnhealthy = new("upstream_unhealthy");

    public static readonly TerminationReason Cancelled = new("cancelled");

    public static readonly TerminationReason TerminalError = new("terminal_error");

    public TResult Match<TResult>(Func<TResult> onNaturalEnd,
        Func<TResult> onMaxPagesReached,
        Func<TResult> onQuotaExhausted,
        Func<TResult> onUpstreamUnhealthy,
        Func<TResult> onCancelled,
        Func<TResult> onTerminalError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NaturalEnd => onNaturalEnd(),
            _ when this == MaxPagesReached => onMaxPagesReached(),
            _ when this == QuotaExhausted => onQuotaExhausted(),
            _ when this == UpstreamUnhealthy => onUpstreamUnhealthy(),
            _ when this == Cancelled => onCancelled(),
            _ when this == TerminalError => onTerminalError(),
            _ => otherwise(Value)
        };

    public void Match(Action onNaturalEnd,
        Action onMaxPagesReached,
        Action onQuotaExhausted,
        Action onUpstreamUnhealthy,
        Action onCancelled,
        Action onTerminalError,
        Action<string> otherwise)
    {
        if (this == NaturalEnd) onNaturalEnd();
        else if (this == MaxPagesReached) onMaxPagesReached();
        else if (this == QuotaExhausted) onQuotaExhausted();
        else if (this == UpstreamUnhealthy) onUpstreamUnhealthy();
        else if (this == Cancelled) onCancelled();
        else if (this == TerminalError) onTerminalError();
        else otherwise(Value);
    }
}
