using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the CreateBgpPeer operation.
/// </summary>
public sealed record CreateBgpPeerOperationRequest
{
    public required XAmzTarget28 XAmzTarget { get; init; }
}
