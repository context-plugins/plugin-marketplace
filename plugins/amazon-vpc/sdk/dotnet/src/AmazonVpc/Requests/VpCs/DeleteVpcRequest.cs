namespace AmazonVpc.Requests.VpCs;

/// <summary>
/// The inputs of the DeleteVpc operation.
/// </summary>
public sealed record DeleteVpcRequest
{
    /// <summary>
    /// The ID of the VPC to delete
    /// </summary>
    public required string VpcId { get; init; }
}
