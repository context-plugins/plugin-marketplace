using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DeleteConnection operation.
/// </summary>
public sealed record DeleteConnectionOperationRequest
{
    public required XAmzTarget16 XAmzTarget { get; init; }
}
