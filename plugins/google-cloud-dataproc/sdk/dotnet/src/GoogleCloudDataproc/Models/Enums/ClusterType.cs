using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The type of the cluster.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ClusterType>))]
public sealed record ClusterType : OpenStringEnum<ClusterType>
{
    private ClusterType(string value) : base(value)
    {
    }

    public static readonly ClusterType ClusterTypeUnspecified = new("CLUSTER_TYPE_UNSPECIFIED");

    public static readonly ClusterType Standard = new("STANDARD");

    public static readonly ClusterType SingleNode = new("SINGLE_NODE");

    public static readonly ClusterType ZeroScale = new("ZERO_SCALE");

    public TResult Match<TResult>(Func<TResult> onClusterTypeUnspecified,
        Func<TResult> onStandard,
        Func<TResult> onSingleNode,
        Func<TResult> onZeroScale,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ClusterTypeUnspecified => onClusterTypeUnspecified(),
            _ when this == Standard => onStandard(),
            _ when this == SingleNode => onSingleNode(),
            _ when this == ZeroScale => onZeroScale(),
            _ => otherwise(Value)
        };

    public void Match(Action onClusterTypeUnspecified,
        Action onStandard,
        Action onSingleNode,
        Action onZeroScale,
        Action<string> otherwise)
    {
        if (this == ClusterTypeUnspecified) onClusterTypeUnspecified();
        else if (this == Standard) onStandard();
        else if (this == SingleNode) onSingleNode();
        else if (this == ZeroScale) onZeroScale();
        else otherwise(Value);
    }
}
