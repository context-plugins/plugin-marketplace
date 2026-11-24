using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the SetLocalConsolePassword operation.
/// </summary>
public sealed record SetLocalConsolePasswordRequest
{
    public required XAmzTarget79 XAmzTarget { get; init; }
}
