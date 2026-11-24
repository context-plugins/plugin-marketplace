using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the ListMapRuns operation.
/// </summary>
public sealed record ListMapRunsRequest
{
    public required XAmzTarget15 XAmzTarget { get; init; }
}
