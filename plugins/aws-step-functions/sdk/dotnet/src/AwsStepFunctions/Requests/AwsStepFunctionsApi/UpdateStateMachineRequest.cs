using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the UpdateStateMachine operation.
/// </summary>
public sealed record UpdateStateMachineRequest
{
    public required XAmzTarget9 XAmzTarget { get; init; }
}
