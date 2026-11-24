using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.MonitorApi;

/// <summary>
/// The inputs of the CreateMonitor operation.
/// </summary>
public sealed record CreateMonitorOperationRequest
{
    public required XAmzTargetAmazonForecastServiceMonitorApi XAmzTarget { get; init; }
}
