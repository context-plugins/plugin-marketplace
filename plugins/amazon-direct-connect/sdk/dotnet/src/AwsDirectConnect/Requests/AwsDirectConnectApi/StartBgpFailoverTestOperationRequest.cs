using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the StartBgpFailoverTest operation.
/// </summary>
public sealed record StartBgpFailoverTestOperationRequest
{
    public required XAmzTarget58 XAmzTarget { get; init; }
}
