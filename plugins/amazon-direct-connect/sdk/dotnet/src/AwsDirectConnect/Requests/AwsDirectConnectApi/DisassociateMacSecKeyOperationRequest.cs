using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DisassociateMacSecKey operation.
/// </summary>
public sealed record DisassociateMacSecKeyOperationRequest
{
    public required XAmzTarget24 XAmzTarget { get; init; }
}
