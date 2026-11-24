using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Required. Repair action to take on specified resources of the node pool.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RepairAction1>))]
public sealed record RepairAction1 : OpenStringEnum<RepairAction1>
{
    private RepairAction1(string value) : base(value)
    {
    }

    public static readonly RepairAction1 RepairActionUnspecified = new("REPAIR_ACTION_UNSPECIFIED");

    public static readonly RepairAction1 Delete = new("DELETE");

    public TResult Match<TResult>(Func<TResult> onRepairActionUnspecified,
        Func<TResult> onDelete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RepairActionUnspecified => onRepairActionUnspecified(),
            _ when this == Delete => onDelete(),
            _ => otherwise(Value)
        };

    public void Match(Action onRepairActionUnspecified, Action onDelete, Action<string> otherwise)
    {
        if (this == RepairActionUnspecified) onRepairActionUnspecified();
        else if (this == Delete) onDelete();
        else otherwise(Value);
    }
}
