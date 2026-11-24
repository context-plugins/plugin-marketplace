using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the CountPendingActivityTasks operation.
/// </summary>
public sealed record CountPendingActivityTasksRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
