using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the UntagResource operation.
/// </summary>
public sealed record UntagResourceOperationRequest
{
    public required XAmzTarget61 XAmzTarget { get; init; }
}
