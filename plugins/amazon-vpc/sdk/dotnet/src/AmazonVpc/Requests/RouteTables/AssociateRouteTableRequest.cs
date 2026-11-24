namespace AmazonVpc.Requests.RouteTables;

/// <summary>
/// The inputs of the AssociateRouteTable operation.
/// </summary>
public sealed record AssociateRouteTableRequest
{
    /// <summary>
    /// The ID of the route table
    /// </summary>
    public required string RouteTableId { get; init; }

    /// <summary>
    /// The ID of the subnet
    /// </summary>
    public string? SubnetId { get; init; }

    /// <summary>
    /// The ID of the internet gateway or virtual private gateway
    /// </summary>
    public string? GatewayId { get; init; }
}
