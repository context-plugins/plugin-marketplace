using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

/// <summary>
/// Set on a <c>plan_like</c> buyer when the Form 4's own footnotes or remarks decided it: <c>placement</c> — bought from the issuer (a PIPE, a subscription or securities purchase agreement, SPAC sponsor units); <c>offering</c> — allocated in a public offering or IPO; <c>private</c> — a negotiated block from another holder (a stock transfer agreement, a private transaction). Null when the price shape alone decided the role. Read by the collector since 2026-09-26; earlier filings are backfilled for 90 days.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason Placement = new("placement");

    public static readonly Reason Offering = new("offering");

    public static readonly Reason Private = new("private");

    public TResult Match<TResult>(Func<TResult> onPlacement,
        Func<TResult> onOffering,
        Func<TResult> onPrivate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Placement => onPlacement(),
            _ when this == Offering => onOffering(),
            _ when this == Private => onPrivate(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlacement, Action onOffering, Action onPrivate, Action<string> otherwise)
    {
        if (this == Placement) onPlacement();
        else if (this == Offering) onOffering();
        else if (this == Private) onPrivate();
        else otherwise(Value);
    }
}
