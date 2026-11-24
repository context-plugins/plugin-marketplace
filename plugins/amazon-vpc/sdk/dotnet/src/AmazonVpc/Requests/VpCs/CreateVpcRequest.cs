using AmazonVpc.Models.Enums;

namespace AmazonVpc.Requests.VpCs;

/// <summary>
/// The inputs of the CreateVpc operation.
/// </summary>
public sealed record CreateVpcRequest
{
    /// <summary>
    /// The IPv4 network range for the VPC in CIDR notation (e.g., 10.0.0.0/16)
    /// </summary>
    public required string CidrBlock { get; init; }

    /// <summary>
    /// Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length
    /// </summary>
    public bool? AmazonProvidedIpv6CidrBlock { get; init; }

    /// <summary>
    /// The tenancy options for instances launched into the VPC
    /// </summary>
    public InstanceTenancy1? InstanceTenancy { get; init; }
}
