using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the SendTaskSuccess operation.
/// </summary>
public sealed record SendTaskSuccessRequest
{
    public required XAmzTarget22 XAmzTarget { get; init; }
}
