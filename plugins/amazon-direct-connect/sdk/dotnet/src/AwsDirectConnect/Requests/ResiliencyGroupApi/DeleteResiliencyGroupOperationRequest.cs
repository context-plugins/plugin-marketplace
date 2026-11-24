using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.ResiliencyGroupApi;

/// <summary>
/// The inputs of the DeleteResiliencyGroup operation.
/// </summary>
public sealed record DeleteResiliencyGroupOperationRequest
{
    public required XAmzTarget1AwsDirectConnectResiliencyGroupApi XAmzTarget { get; init; }
}
