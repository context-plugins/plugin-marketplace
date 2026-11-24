using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.EventSources;

/// <summary>
/// The inputs of the UpdateEventSourcesConfig operation.
/// </summary>
public sealed record UpdateEventSourcesConfigRequest
{
    public DescribeEventSourcesConfigResponse? Body { get; init; }
}
