using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.ListLogAnomalies;

/// <summary>
/// The inputs of the ListAnomalousLogGroups operation.
/// </summary>
public sealed record ListAnomalousLogGroupsRequest
{
    public ListLogAnomaliesRequest? Body { get; init; }
}
