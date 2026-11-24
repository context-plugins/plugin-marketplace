using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the ListStateMachines operation.
/// </summary>
public sealed record ListStateMachinesRequest
{
    public required XAmzTarget8 XAmzTarget { get; init; }
}
