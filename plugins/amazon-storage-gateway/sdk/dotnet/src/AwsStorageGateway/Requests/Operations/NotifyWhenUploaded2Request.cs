using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.Operations;

/// <summary>
/// The inputs of the NotifyWhenUploaded2 operation.
/// </summary>
public sealed record NotifyWhenUploaded2Request
{
    public required XAmzTarget4AwsStorageGatewayOperationsApi XAmzTarget { get; init; }
}
