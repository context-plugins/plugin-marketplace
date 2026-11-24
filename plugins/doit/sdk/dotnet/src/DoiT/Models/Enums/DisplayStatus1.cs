using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DisplayStatus1>))]
public sealed record DisplayStatus1 : OpenStringEnum<DisplayStatus1>
{
    private DisplayStatus1(string value) : base(value)
    {
    }

    public static readonly DisplayStatus1 Actionable = new("actionable");

    public static readonly DisplayStatus1 Acknowledged = new("acknowledged");

    public static readonly DisplayStatus1 InProgress = new("in progress");

    public static readonly DisplayStatus1 Optimized = new("optimized");

    public static readonly DisplayStatus1 Dismissed = new("dismissed");

    public TResult Match<TResult>(Func<TResult> onActionable,
        Func<TResult> onAcknowledged,
        Func<TResult> onInProgress,
        Func<TResult> onOptimized,
        Func<TResult> onDismissed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Actionable => onActionable(),
            _ when this == Acknowledged => onAcknowledged(),
            _ when this == InProgress => onInProgress(),
            _ when this == Optimized => onOptimized(),
            _ when this == Dismissed => onDismissed(),
            _ => otherwise(Value)
        };

    public void Match(Action onActionable,
        Action onAcknowledged,
        Action onInProgress,
        Action onOptimized,
        Action onDismissed,
        Action<string> otherwise)
    {
        if (this == Actionable) onActionable();
        else if (this == Acknowledged) onAcknowledged();
        else if (this == InProgress) onInProgress();
        else if (this == Optimized) onOptimized();
        else if (this == Dismissed) onDismissed();
        else otherwise(Value);
    }
}
