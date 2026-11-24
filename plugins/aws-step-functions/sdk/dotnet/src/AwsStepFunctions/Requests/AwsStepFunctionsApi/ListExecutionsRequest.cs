using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the ListExecutions operation.
/// </summary>
public sealed record ListExecutionsRequest
{
    public required XAmzTarget11 XAmzTarget { get; init; }
}
