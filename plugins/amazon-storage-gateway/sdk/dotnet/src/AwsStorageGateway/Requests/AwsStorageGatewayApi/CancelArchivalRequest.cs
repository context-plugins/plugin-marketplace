using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CancelArchival operation.
/// </summary>
public sealed record CancelArchivalRequest
{
    public required XAmzTarget23 XAmzTarget { get; init; }
}
