using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.Operations;

/// <summary>
/// The inputs of the ActivateGateway3 operation.
/// </summary>
public sealed record ActivateGateway3Request
{
    public required XAmzTarget XAmzTarget { get; init; }
}
