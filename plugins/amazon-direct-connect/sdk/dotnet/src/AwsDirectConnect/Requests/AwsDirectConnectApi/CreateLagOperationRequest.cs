using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the CreateLag operation.
/// </summary>
public sealed record CreateLagOperationRequest
{
    public required XAmzTarget41 XAmzTarget { get; init; }
}
