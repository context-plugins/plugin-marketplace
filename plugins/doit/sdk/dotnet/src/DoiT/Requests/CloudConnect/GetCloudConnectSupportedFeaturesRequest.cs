namespace DoiT.Requests.CloudConnect;

/// <summary>
/// The inputs of the GetCloudConnectSupportedFeatures operation.
/// </summary>
public sealed record GetCloudConnectSupportedFeaturesRequest
{
    /// <summary>
    /// The cloud provider account ID (AWS account ID or Azure tenant ID).
    /// </summary>
    public required string AccountId { get; init; }
}
