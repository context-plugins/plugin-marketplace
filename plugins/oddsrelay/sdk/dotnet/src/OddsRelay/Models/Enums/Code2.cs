using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// Stable machine code; branch on this, never on <c>message</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code2>))]
public sealed record Code2 : OpenStringEnum<Code2>
{
    private Code2(string value) : base(value)
    {
    }

    public static readonly Code2 BadRequest = new("bad_request");

    public static readonly Code2 MissingParam = new("missing_param");

    public static readonly Code2 RegionRequired = new("region_required");

    public static readonly Code2 UnknownSport = new("unknown_sport");

    public static readonly Code2 UnknownMarket = new("unknown_market");

    public static readonly Code2 UnknownBookmaker = new("unknown_bookmaker");

    public static readonly Code2 UnknownExchange = new("unknown_exchange");

    public TResult Match<TResult>(Func<TResult> onBadRequest,
        Func<TResult> onMissingParam,
        Func<TResult> onRegionRequired,
        Func<TResult> onUnknownSport,
        Func<TResult> onUnknownMarket,
        Func<TResult> onUnknownBookmaker,
        Func<TResult> onUnknownExchange,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BadRequest => onBadRequest(),
            _ when this == MissingParam => onMissingParam(),
            _ when this == RegionRequired => onRegionRequired(),
            _ when this == UnknownSport => onUnknownSport(),
            _ when this == UnknownMarket => onUnknownMarket(),
            _ when this == UnknownBookmaker => onUnknownBookmaker(),
            _ when this == UnknownExchange => onUnknownExchange(),
            _ => otherwise(Value)
        };

    public void Match(Action onBadRequest,
        Action onMissingParam,
        Action onRegionRequired,
        Action onUnknownSport,
        Action onUnknownMarket,
        Action onUnknownBookmaker,
        Action onUnknownExchange,
        Action<string> otherwise)
    {
        if (this == BadRequest) onBadRequest();
        else if (this == MissingParam) onMissingParam();
        else if (this == RegionRequired) onRegionRequired();
        else if (this == UnknownSport) onUnknownSport();
        else if (this == UnknownMarket) onUnknownMarket();
        else if (this == UnknownBookmaker) onUnknownBookmaker();
        else if (this == UnknownExchange) onUnknownExchange();
        else otherwise(Value);
    }
}
