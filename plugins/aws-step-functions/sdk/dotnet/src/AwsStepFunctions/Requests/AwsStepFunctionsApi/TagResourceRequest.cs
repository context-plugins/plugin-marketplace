using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the TagResource operation.
/// </summary>
public sealed record TagResourceRequest
{
    public required XAmzTarget24 XAmzTarget { get; init; }
}
