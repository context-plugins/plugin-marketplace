using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// Status of the alert.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Opened = new("OPENED");

    public static readonly Status1 Acknowledged = new("ACKNOWLEDGED");

    public static readonly Status1 Snoozed = new("SNOOZED");

    public static readonly Status1 Closed = new("CLOSED");

    public TResult Match<TResult>(Func<TResult> onOpened,
        Func<TResult> onAcknowledged,
        Func<TResult> onSnoozed,
        Func<TResult> onClosed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Opened => onOpened(),
            _ when this == Acknowledged => onAcknowledged(),
            _ when this == Snoozed => onSnoozed(),
            _ when this == Closed => onClosed(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpened,
        Action onAcknowledged,
        Action onSnoozed,
        Action onClosed,
        Action<string> otherwise)
    {
        if (this == Opened) onOpened();
        else if (this == Acknowledged) onAcknowledged();
        else if (this == Snoozed) onSnoozed();
        else if (this == Closed) onClosed();
        else otherwise(Value);
    }
}
