namespace AmazonVpc.Requests.InternetGateways;

/// <summary>
/// The inputs of the AttachInternetGateway operation.
/// </summary>
public sealed record AttachInternetGatewayRequest
{
    /// <summary>
    /// The ID of the internet gateway
    /// </summary>
    public required string InternetGatewayId { get; init; }

    /// <summary>
    /// The ID of the VPC
    /// </summary>
    public required string VpcId { get; init; }
}
