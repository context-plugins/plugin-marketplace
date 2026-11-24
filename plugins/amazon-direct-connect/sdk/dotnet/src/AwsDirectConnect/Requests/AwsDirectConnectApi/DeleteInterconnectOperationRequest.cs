using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DeleteInterconnect operation.
/// </summary>
public sealed record DeleteInterconnectOperationRequest
{
    public required XAmzTarget39 XAmzTarget { get; init; }
}
