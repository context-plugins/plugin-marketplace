using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.Operations;

/// <summary>
/// The inputs of the ValidateStateMachineDefinition operation.
/// </summary>
public sealed record ValidateStateMachineDefinitionRequest
{
    public required XAmzTarget3AwsStepFunctionsOperationsApi XAmzTarget { get; init; }
}
