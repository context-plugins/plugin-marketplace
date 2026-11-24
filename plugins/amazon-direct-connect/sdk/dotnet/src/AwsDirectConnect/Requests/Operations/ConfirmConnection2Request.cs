using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the ConfirmConnection2 operation.
/// </summary>
public sealed record ConfirmConnection2Request
{
    public required XAmzTarget5AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
