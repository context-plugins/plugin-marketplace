using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the CreateConnection operation.
/// </summary>
public sealed record CreateConnectionOperationRequest
{
    public required XAmzTarget15 XAmzTarget { get; init; }
}
