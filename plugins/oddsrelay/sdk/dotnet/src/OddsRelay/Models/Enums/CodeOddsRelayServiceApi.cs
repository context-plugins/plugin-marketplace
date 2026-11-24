using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// Stable machine code; branch on this, never on <c>message</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CodeOddsRelayServiceApi>))]
public sealed record CodeOddsRelayServiceApi : OpenStringEnum<CodeOddsRelayServiceApi>
{
    private CodeOddsRelayServiceApi(string value) : base(value)
    {
    }

    public static readonly CodeOddsRelayServiceApi NotFound = new("not_found");

    public static readonly CodeOddsRelayServiceApi UnknownType = new("unknown_type");

    public static readonly CodeOddsRelayServiceApi UnknownRegion = new("unknown_region");

    public static readonly CodeOddsRelayServiceApi UnknownEvent = new("unknown_event");

    public TResult Match<TResult>(Func<TResult> onNotFound,
        Func<TResult> onUnknownType,
        Func<TResult> onUnknownRegion,
        Func<TResult> onUnknownEvent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotFound => onNotFound(),
            _ when this == UnknownType => onUnknownType(),
            _ when this == UnknownRegion => onUnknownRegion(),
            _ when this == UnknownEvent => onUnknownEvent(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotFound,
        Action onUnknownType,
        Action onUnknownRegion,
        Action onUnknownEvent,
        Action<string> otherwise)
    {
        if (this == NotFound) onNotFound();
        else if (this == UnknownType) onUnknownType();
        else if (this == UnknownRegion) onUnknownRegion();
        else if (this == UnknownEvent) onUnknownEvent();
        else otherwise(Value);
    }
}
