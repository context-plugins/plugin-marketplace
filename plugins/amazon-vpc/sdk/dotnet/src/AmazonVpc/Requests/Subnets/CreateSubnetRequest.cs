namespace AmazonVpc.Requests.Subnets;

/// <summary>
/// The inputs of the CreateSubnet operation.
/// </summary>
public sealed record CreateSubnetRequest
{
    /// <summary>
    /// The ID of the VPC
    /// </summary>
    public required string VpcId { get; init; }

    /// <summary>
    /// The IPv4 network range for the subnet in CIDR notation
    /// </summary>
    public required string CidrBlock { get; init; }

    /// <summary>
    /// The Availability Zone or Local Zone for the subnet
    /// </summary>
    public string? AvailabilityZone { get; init; }

    /// <summary>
    /// The IPv6 network range for the subnet in CIDR notation
    /// </summary>
    public string? Ipv6CidrBlock { get; init; }
}
