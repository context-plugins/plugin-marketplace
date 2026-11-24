using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The cluster tier.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ClusterTier>))]
public sealed record ClusterTier : OpenStringEnum<ClusterTier>
{
    private ClusterTier(string value) : base(value)
    {
    }

    public static readonly ClusterTier ClusterTierUnspecified = new("CLUSTER_TIER_UNSPECIFIED");

    public static readonly ClusterTier ClusterTierStandard = new("CLUSTER_TIER_STANDARD");

    public static readonly ClusterTier ClusterTierPremium = new("CLUSTER_TIER_PREMIUM");

    public TResult Match<TResult>(Func<TResult> onClusterTierUnspecified,
        Func<TResult> onClusterTierStandard,
        Func<TResult> onClusterTierPremium,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ClusterTierUnspecified => onClusterTierUnspecified(),
            _ when this == ClusterTierStandard => onClusterTierStandard(),
            _ when this == ClusterTierPremium => onClusterTierPremium(),
            _ => otherwise(Value)
        };

    public void Match(Action onClusterTierUnspecified,
        Action onClusterTierStandard,
        Action onClusterTierPremium,
        Action<string> otherwise)
    {
        if (this == ClusterTierUnspecified) onClusterTierUnspecified();
        else if (this == ClusterTierStandard) onClusterTierStandard();
        else if (this == ClusterTierPremium) onClusterTierPremium();
        else otherwise(Value);
    }
}
