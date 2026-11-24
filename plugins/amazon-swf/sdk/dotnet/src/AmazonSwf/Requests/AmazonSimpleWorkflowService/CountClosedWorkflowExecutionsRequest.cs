using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the CountClosedWorkflowExecutions operation.
/// </summary>
public sealed record CountClosedWorkflowExecutionsRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
