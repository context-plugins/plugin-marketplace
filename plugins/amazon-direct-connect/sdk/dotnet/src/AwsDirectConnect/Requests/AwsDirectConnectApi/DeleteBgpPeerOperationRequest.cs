using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DeleteBgpPeer operation.
/// </summary>
public sealed record DeleteBgpPeerOperationRequest
{
    public required XAmzTarget29 XAmzTarget { get; init; }
}
