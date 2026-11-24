using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the TagResource operation.
/// </summary>
public sealed record TagResourceOperationRequest
{
    public required XAmzTarget60 XAmzTarget { get; init; }
}
