namespace AmazonVpc.Requests.RouteTables;

/// <summary>
/// The inputs of the CreateRouteTable operation.
/// </summary>
public sealed record CreateRouteTableRequest
{
    /// <summary>
    /// The ID of the VPC
    /// </summary>
    public required string VpcId { get; init; }
}
