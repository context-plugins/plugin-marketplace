using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the ListClosedWorkflowExecutions operation.
/// </summary>
public sealed record ListClosedWorkflowExecutionsRequest
{
    public required XAmzTarget32 XAmzTarget { get; init; }
}
