using DoiT.Models;

namespace DoiT.Requests.CloudConnect;

/// <summary>
/// The inputs of the UpdateAwsFeature operation.
/// </summary>
public sealed record UpdateAwsFeatureRequest
{
    /// <summary>
    /// The AWS account ID.
    /// </summary>
    public required string AccountId { get; init; }

    public required CoreV1CloudconnectAwsAccountsRequest1 Body { get; init; }
}
