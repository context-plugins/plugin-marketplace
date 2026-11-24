using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the DeleteActivity operation.
/// </summary>
public sealed record DeleteActivityRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
