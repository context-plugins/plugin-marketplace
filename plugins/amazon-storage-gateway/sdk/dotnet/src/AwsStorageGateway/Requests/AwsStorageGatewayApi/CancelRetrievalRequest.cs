using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CancelRetrieval operation.
/// </summary>
public sealed record CancelRetrievalRequest
{
    public required XAmzTarget24 XAmzTarget { get; init; }
}
