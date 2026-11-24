using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.MonitorApi;

/// <summary>
/// The inputs of the DeleteMonitor operation.
/// </summary>
public sealed record DeleteMonitorOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceMonitorApi XAmzTarget { get; init; }
}
