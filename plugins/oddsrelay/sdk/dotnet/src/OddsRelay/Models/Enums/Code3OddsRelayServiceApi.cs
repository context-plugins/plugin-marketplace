using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// Stable machine code; branch on this, never on <c>message</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code3OddsRelayServiceApi>))]
public sealed record Code3OddsRelayServiceApi : OpenStringEnum<Code3OddsRelayServiceApi>
{
    private Code3OddsRelayServiceApi(string value) : base(value)
    {
    }

    public static readonly Code3OddsRelayServiceApi BadRequest = new("bad_request");

    public static readonly Code3OddsRelayServiceApi MissingParam = new("missing_param");

    public static readonly Code3OddsRelayServiceApi RegionRequired = new("region_required");

    public static readonly Code3OddsRelayServiceApi UnknownSport = new("unknown_sport");

    public static readonly Code3OddsRelayServiceApi UnknownMarket = new("unknown_market");

    public static readonly Code3OddsRelayServiceApi UnknownBookmaker = new("unknown_bookmaker");

    public static readonly Code3OddsRelayServiceApi UnknownExchange = new("unknown_exchange");

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
