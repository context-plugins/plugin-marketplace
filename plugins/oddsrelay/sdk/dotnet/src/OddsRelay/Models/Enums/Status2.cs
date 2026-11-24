using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// <c>live</c>: we are publishing odds for this venue and sport right now. <c>interrupted_24h</c>: we are not — no rows at this instant, or the venue's feed is interrupted now; it was publishing within the last 24 hours, which is why it is listed at all.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Live = new("live");

    public static readonly Status2 Interrupted24H = new("interrupted_24h");

    public TResult Match<TResult>(Func<TResult> onLive,
        Func<TResult> onInterrupted24H,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Live => onLive(),
            _ when this == Interrupted24H => onInterrupted24H(),
            _ => otherwise(Value)
        };

    public void Match(Action onLive, Action onInterrupted24H, Action<string> otherwise)
    {
        if (this == Live) onLive();
        else if (this == Interrupted24H) onInterrupted24H();
        else otherwise(Value);
    }
}
