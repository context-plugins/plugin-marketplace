using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the CountPendingDecisionTasks operation.
/// </summary>
public sealed record CountPendingDecisionTasksRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
