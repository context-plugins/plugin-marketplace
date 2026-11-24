using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Required. Repair action to take on the cluster resource.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ClusterRepairAction>))]
public sealed record ClusterRepairAction : OpenStringEnum<ClusterRepairAction>
{
    private ClusterRepairAction(string value) : base(value)
    {
    }

    public static readonly ClusterRepairAction ClusterRepairActionUnspecified = new(
        "CLUSTER_REPAIR_ACTION_UNSPECIFIED");

    public static readonly ClusterRepairAction RepairErrorDueToUpdateCluster = new(
        "REPAIR_ERROR_DUE_TO_UPDATE_CLUSTER");

    public TResult Match<TResult>(Func<TResult> onClusterRepairActionUnspecified,
        Func<TResult> onRepairErrorDueToUpdateCluster,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ClusterRepairActionUnspecified => onClusterRepairActionUnspecified(),
            _ when this == RepairErrorDueToUpdateCluster => onRepairErrorDueToUpdateCluster(),
            _ => otherwise(Value)
        };

    public void Match(Action onClusterRepairActionUnspecified,
        Action onRepairErrorDueToUpdateCluster,
        Action<string> otherwise)
    {
        if (this == ClusterRepairActionUnspecified) onClusterRepairActionUnspecified();
        else if (this == RepairErrorDueToUpdateCluster) onRepairErrorDueToUpdateCluster();
        else otherwise(Value);
    }
}
