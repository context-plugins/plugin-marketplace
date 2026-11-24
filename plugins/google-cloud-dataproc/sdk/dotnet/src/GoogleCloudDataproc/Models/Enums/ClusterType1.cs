using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The type of the clusters for which this autoscaling policy is to be configured.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ClusterType1>))]
public sealed record ClusterType1 : OpenStringEnum<ClusterType1>
{
    private ClusterType1(string value) : base(value)
    {
    }

    public static readonly ClusterType1 ClusterTypeUnspecified = new("CLUSTER_TYPE_UNSPECIFIED");

    public static readonly ClusterType1 Standard = new("STANDARD");

    public static readonly ClusterType1 ZeroScale = new("ZERO_SCALE");

    public TResult Match<TResult>(Func<TResult> onClusterTypeUnspecified,
        Func<TResult> onStandard,
        Func<TResult> onZeroScale,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ClusterTypeUnspecified => onClusterTypeUnspecified(),
            _ when this == Standard => onStandard(),
            _ when this == ZeroScale => onZeroScale(),
            _ => otherwise(Value)
        };

    public void Match(Action onClusterTypeUnspecified, Action onStandard, Action onZeroScale, Action<string> otherwise)
    {
        if (this == ClusterTypeUnspecified) onClusterTypeUnspecified();
        else if (this == Standard) onStandard();
        else if (this == ZeroScale) onZeroScale();
        else otherwise(Value);
    }
}
