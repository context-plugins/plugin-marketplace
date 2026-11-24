using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.MonitoredResources;

/// <summary>
/// The inputs of the ListMonitoredResources operation.
/// </summary>
public sealed record ListMonitoredResourcesRequest
{
    public MonitoredResourcesRequest? Body { get; init; }
}
