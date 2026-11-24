namespace AmazonVpc.Requests.Subnets;

/// <summary>
/// The inputs of the DeleteSubnet operation.
/// </summary>
public sealed record DeleteSubnetRequest
{
    /// <summary>
    /// The ID of the subnet to delete
    /// </summary>
    public required string SubnetId { get; init; }
}
