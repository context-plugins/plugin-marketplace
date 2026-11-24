using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the AllocateConnectionOnInterconnect operation.
/// </summary>
public sealed record AllocateConnectionOnInterconnectOperationRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
