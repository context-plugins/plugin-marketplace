using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.MonitorApi;

/// <summary>
/// The inputs of the ListMonitors operation.
/// </summary>
public sealed record ListMonitorsOperationRequest
{
    public required XAmzTarget3AmazonForecastServiceMonitorApi XAmzTarget { get; init; }
}
