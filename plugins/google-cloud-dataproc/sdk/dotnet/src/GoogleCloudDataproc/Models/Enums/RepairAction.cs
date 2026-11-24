using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Required. Repair action to take on specified resources of the node pool.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RepairAction>))]
public sealed record RepairAction : OpenStringEnum<RepairAction>
{
    private RepairAction(string value) : base(value)
    {
    }

    public static readonly RepairAction RepairActionUnspecified = new("REPAIR_ACTION_UNSPECIFIED");

    public static readonly RepairAction Replace = new("REPLACE");

    public TResult Match<TResult>(Func<TResult> onRepairActionUnspecified,
        Func<TResult> onReplace,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RepairActionUnspecified => onRepairActionUnspecified(),
            _ when this == Replace => onReplace(),
            _ => otherwise(Value)
        };

    public void Match(Action onRepairActionUnspecified, Action onReplace, Action<string> otherwise)
    {
        if (this == RepairActionUnspecified) onRepairActionUnspecified();
        else if (this == Replace) onReplace();
        else otherwise(Value);
    }
}
