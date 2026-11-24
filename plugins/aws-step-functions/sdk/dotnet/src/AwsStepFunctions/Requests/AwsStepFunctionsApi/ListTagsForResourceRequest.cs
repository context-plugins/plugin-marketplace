using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the ListTagsForResource operation.
/// </summary>
public sealed record ListTagsForResourceRequest
{
    public required XAmzTarget19 XAmzTarget { get; init; }
}
