using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the StartAvailabilityMonitorTest operation.
/// </summary>
public sealed record StartAvailabilityMonitorTestRequest
{
    public required XAmzTarget64 XAmzTarget { get; init; }
}
