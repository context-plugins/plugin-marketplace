using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Requests.AwsStepFunctionsApi;

/// <summary>
/// The inputs of the ListActivities operation.
/// </summary>
public sealed record ListActivitiesRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
