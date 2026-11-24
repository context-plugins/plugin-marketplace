using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The type of IPv6 access for a cluster.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PrivateIpv6GoogleAccess>))]
public sealed record PrivateIpv6GoogleAccess : OpenStringEnum<PrivateIpv6GoogleAccess>
{
    private PrivateIpv6GoogleAccess(string value) : base(value)
    {
    }

    public static readonly PrivateIpv6GoogleAccess PrivateIpv6GoogleAccessUnspecified = new(
        "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED");

    public static readonly PrivateIpv6GoogleAccess InheritFromSubnetwork = new("INHERIT_FROM_SUBNETWORK");

    public static readonly PrivateIpv6GoogleAccess Outbound = new("OUTBOUND");

    public static readonly PrivateIpv6GoogleAccess Bidirectional = new("BIDIRECTIONAL");

    public TResult Match<TResult>(Func<TResult> onPrivateIpv6GoogleAccessUnspecified,
        Func<TResult> onInheritFromSubnetwork,
        Func<TResult> onOutbound,
        Func<TResult> onBidirectional,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PrivateIpv6GoogleAccessUnspecified => onPrivateIpv6GoogleAccessUnspecified(),
            _ when this == InheritFromSubnetwork => onInheritFromSubnetwork(),
            _ when this == Outbound => onOutbound(),
            _ when this == Bidirectional => onBidirectional(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrivateIpv6GoogleAccessUnspecified,
        Action onInheritFromSubnetwork,
        Action onOutbound,
        Action onBidirectional,
        Action<string> otherwise)
    {
        if (this == PrivateIpv6GoogleAccessUnspecified) onPrivateIpv6GoogleAccessUnspecified();
        else if (this == InheritFromSubnetwork) onInheritFromSubnetwork();
        else if (this == Outbound) onOutbound();
        else if (this == Bidirectional) onBidirectional();
        else otherwise(Value);
    }
}
