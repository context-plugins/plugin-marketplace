using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the CreateActivity operation.
/// </summary>
public sealed record CreateActivityRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
