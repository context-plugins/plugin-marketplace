namespace AmazonVpc.Requests.VpCs;

/// <summary>
/// The inputs of the ModifyVpcAttribute operation.
/// </summary>
public sealed record ModifyVpcAttributeRequest
{
    /// <summary>
    /// The ID of the VPC
    /// </summary>
    public required string VpcId { get; init; }

    /// <summary>
    /// Indicates whether DNS resolution is supported for the VPC
    /// </summary>
    public bool? EnableDnsSupportValue { get; init; }

    /// <summary>
    /// Indicates whether instances launched in the VPC get DNS hostnames
    /// </summary>
    public bool? EnableDnsHostnamesValue { get; init; }
}
