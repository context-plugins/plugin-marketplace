using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the GetActivityTask operation.
/// </summary>
public sealed record GetActivityTaskRequest
{
    public required XAmzTarget17 XAmzTarget { get; init; }
}
