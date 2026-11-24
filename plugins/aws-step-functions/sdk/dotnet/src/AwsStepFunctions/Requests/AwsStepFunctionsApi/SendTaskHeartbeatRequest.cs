using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the SendTaskHeartbeat operation.
/// </summary>
public sealed record SendTaskHeartbeatRequest
{
    public required XAmzTarget21 XAmzTarget { get; init; }
}
