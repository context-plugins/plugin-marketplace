using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.ResiliencyGroupApi;

/// <summary>
/// The inputs of the UpdateResiliencyGroup operation.
/// </summary>
public sealed record UpdateResiliencyGroupOperationRequest
{
    public required XAmzTarget4AwsDirectConnectResiliencyGroupApi XAmzTarget { get; init; }
}
