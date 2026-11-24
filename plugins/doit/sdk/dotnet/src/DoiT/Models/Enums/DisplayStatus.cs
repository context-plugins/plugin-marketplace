using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The display status of the insight.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DisplayStatus>))]
public sealed record DisplayStatus : OpenStringEnum<DisplayStatus>
{
    private DisplayStatus(string value) : base(value)
    {
    }

    public static readonly DisplayStatus Actionable = new("actionable");

    public static readonly DisplayStatus Acknowledged = new("acknowledged");

    public static readonly DisplayStatus Optimized = new("optimized");

    public static readonly DisplayStatus Dismissed = new("dismissed");

    public static readonly DisplayStatus InProgress = new("in progress");

    public static readonly DisplayStatus UpgradeNeeded = new("upgrade needed");

    public static readonly DisplayStatus PermissionsNeeded = new("permissions needed");

    public TResult Match<TResult>(Func<TResult> onActionable,
        Func<TResult> onAcknowledged,
        Func<TResult> onOptimized,
        Func<TResult> onDismissed,
        Func<TResult> onInProgress,
        Func<TResult> onUpgradeNeeded,
        Func<TResult> onPermissionsNeeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Actionable => onActionable(),
            _ when this == Acknowledged => onAcknowledged(),
            _ when this == Optimized => onOptimized(),
            _ when this == Dismissed => onDismissed(),
            _ when this == InProgress => onInProgress(),
            _ when this == UpgradeNeeded => onUpgradeNeeded(),
            _ when this == PermissionsNeeded => onPermissionsNeeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onActionable,
        Action onAcknowledged,
        Action onOptimized,
        Action onDismissed,
        Action onInProgress,
        Action onUpgradeNeeded,
        Action onPermissionsNeeded,
        Action<string> otherwise)
    {
        if (this == Actionable) onActionable();
        else if (this == Acknowledged) onAcknowledged();
        else if (this == Optimized) onOptimized();
        else if (this == Dismissed) onDismissed();
        else if (this == InProgress) onInProgress();
        else if (this == UpgradeNeeded) onUpgradeNeeded();
        else if (this == PermissionsNeeded) onPermissionsNeeded();
        else otherwise(Value);
    }
}
