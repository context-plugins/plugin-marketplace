using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the UpdateMapRun operation.
/// </summary>
public sealed record UpdateMapRunRequest
{
    public required XAmzTarget16 XAmzTarget { get; init; }
}
