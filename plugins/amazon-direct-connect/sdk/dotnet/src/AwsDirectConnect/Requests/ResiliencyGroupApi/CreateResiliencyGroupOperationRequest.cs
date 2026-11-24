using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.ResiliencyGroupApi;

/// <summary>
/// The inputs of the CreateResiliencyGroup operation.
/// </summary>
public sealed record CreateResiliencyGroupOperationRequest
{
    public required XAmzTargetAwsDirectConnectResiliencyGroupApi XAmzTarget { get; init; }
}
