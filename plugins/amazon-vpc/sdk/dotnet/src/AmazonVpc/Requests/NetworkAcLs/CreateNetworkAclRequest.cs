namespace AmazonVpc.Requests.NetworkAcLs;

/// <summary>
/// The inputs of the CreateNetworkAcl operation.
/// </summary>
public sealed record CreateNetworkAclRequest
{
    /// <summary>
    /// The ID of the VPC
    /// </summary>
    public required string VpcId { get; init; }
}
