using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the AssociateMacSecKey operation.
/// </summary>
public sealed record AssociateMacSecKeyOperationRequest
{
    public required XAmzTarget23 XAmzTarget { get; init; }
}
