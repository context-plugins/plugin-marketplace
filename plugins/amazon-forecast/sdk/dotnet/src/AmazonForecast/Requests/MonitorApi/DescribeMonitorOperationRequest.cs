using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.MonitorApi;

/// <summary>
/// The inputs of the DescribeMonitor operation.
/// </summary>
public sealed record DescribeMonitorOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceMonitorApi XAmzTarget { get; init; }
}
