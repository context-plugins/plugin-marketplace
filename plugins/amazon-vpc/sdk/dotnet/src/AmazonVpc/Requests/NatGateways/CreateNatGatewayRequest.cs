using AmazonVpc.Models.Enums;

namespace AmazonVpc.Requests.NatGateways;

/// <summary>
/// The inputs of the CreateNatGateway operation.
/// </summary>
public sealed record CreateNatGatewayRequest
{
    /// <summary>
    /// The ID of the subnet in which to create the NAT gateway
    /// </summary>
    public required string SubnetId { get; init; }

    /// <summary>
    /// The allocation ID of an Elastic IP address to associate with the NAT gateway
    /// </summary>
    public string? AllocationId { get; init; }

    /// <summary>
    /// Indicates whether the NAT gateway supports public or private connectivity
    /// </summary>
    public ConnectivityType1? ConnectivityType { get; init; }
}
