namespace AmazonVpc.Requests.RouteTables;

/// <summary>
/// The inputs of the CreateRoute operation.
/// </summary>
public sealed record CreateRouteRequest
{
    /// <summary>
    /// The ID of the route table for the route
    /// </summary>
    public required string RouteTableId { get; init; }

    /// <summary>
    /// The IPv4 CIDR address block used for the destination match
    /// </summary>
    public string? DestinationCidrBlock { get; init; }

    /// <summary>
    /// The ID of an internet gateway or virtual private gateway
    /// </summary>
    public string? GatewayId { get; init; }

    /// <summary>
    /// The ID of a NAT gateway
    /// </summary>
    public string? NatGatewayId { get; init; }

    /// <summary>
    /// The ID of a network interface
    /// </summary>
    public string? NetworkInterfaceId { get; init; }
}
