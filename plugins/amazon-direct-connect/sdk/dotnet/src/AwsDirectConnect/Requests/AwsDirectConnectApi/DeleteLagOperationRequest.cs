using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DeleteLag operation.
/// </summary>
public sealed record DeleteLagOperationRequest
{
    public required XAmzTarget42 XAmzTarget { get; init; }
}
