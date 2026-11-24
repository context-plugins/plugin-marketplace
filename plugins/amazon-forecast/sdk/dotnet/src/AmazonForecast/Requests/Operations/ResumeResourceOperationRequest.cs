using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Operations;

/// <summary>
/// The inputs of the ResumeResource operation.
/// </summary>
public sealed record ResumeResourceOperationRequest
{
    public required XAmzTargetAmazonForecastServiceOperationsApi XAmzTarget { get; init; }
}
