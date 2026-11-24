using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the CreateInterconnect operation.
/// </summary>
public sealed record CreateInterconnectOperationRequest
{
    public required XAmzTarget38 XAmzTarget { get; init; }
}
