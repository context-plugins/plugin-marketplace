using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the AllocateHostedConnection2 operation.
/// </summary>
public sealed record AllocateHostedConnection2Request
{
    public required XAmzTarget1AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
