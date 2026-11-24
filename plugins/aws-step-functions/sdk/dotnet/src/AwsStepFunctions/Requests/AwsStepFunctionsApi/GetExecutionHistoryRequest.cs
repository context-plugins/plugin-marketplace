using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the GetExecutionHistory operation.
/// </summary>
public sealed record GetExecutionHistoryRequest
{
    public required XAmzTarget18 XAmzTarget { get; init; }
}
