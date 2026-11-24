using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.ResiliencyGroupApi;

/// <summary>
/// The inputs of the GetResiliencyGroup operation.
/// </summary>
public sealed record GetResiliencyGroupOperationRequest
{
    public required XAmzTarget2AwsDirectConnectResiliencyGroupApi XAmzTarget { get; init; }
}
