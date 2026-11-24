using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the StopBgpFailoverTest operation.
/// </summary>
public sealed record StopBgpFailoverTestOperationRequest
{
    public required XAmzTarget59 XAmzTarget { get; init; }
}
