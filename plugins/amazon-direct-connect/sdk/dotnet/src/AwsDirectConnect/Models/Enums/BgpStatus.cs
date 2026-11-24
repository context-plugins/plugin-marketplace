using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The status of the BGP peer. The following are the possible values: up: The BGP peer is established. This state does not indicate the state of the routing function. Ensure that you are receiving routes over the BGP session. down: The BGP peer is down. unknown: The BGP peer status is not available.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BgpStatus>))]
public sealed record BgpStatus : OpenStringEnum<BgpStatus>
{
    private BgpStatus(string value) : base(value)
    {
    }

    public static readonly BgpStatus Up = new("up");

    public static readonly BgpStatus Down = new("down");

    public static readonly BgpStatus Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onUp,
        Func<TResult> onDown,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Up => onUp(),
            _ when this == Down => onDown(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onUp, Action onDown, Action onUnknown, Action<string> otherwise)
    {
        if (this == Up) onUp();
        else if (this == Down) onDown();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
