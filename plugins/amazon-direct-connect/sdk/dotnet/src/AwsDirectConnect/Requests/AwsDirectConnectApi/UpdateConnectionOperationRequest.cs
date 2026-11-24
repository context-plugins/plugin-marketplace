using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the UpdateConnection operation.
/// </summary>
public sealed record UpdateConnectionOperationRequest
{
    public required XAmzTarget20 XAmzTarget { get; init; }
}
