using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the SendTaskFailure operation.
/// </summary>
public sealed record SendTaskFailureRequest
{
    public required XAmzTarget20 XAmzTarget { get; init; }
}
