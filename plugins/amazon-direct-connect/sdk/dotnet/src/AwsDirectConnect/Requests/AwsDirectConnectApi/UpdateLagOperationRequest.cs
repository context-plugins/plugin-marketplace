using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the UpdateLag operation.
/// </summary>
public sealed record UpdateLagOperationRequest
{
    public required XAmzTarget44 XAmzTarget { get; init; }
}
