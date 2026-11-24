using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the UntagResource operation.
/// </summary>
public sealed record UntagResourceRequest
{
    public required XAmzTarget25 XAmzTarget { get; init; }
}
