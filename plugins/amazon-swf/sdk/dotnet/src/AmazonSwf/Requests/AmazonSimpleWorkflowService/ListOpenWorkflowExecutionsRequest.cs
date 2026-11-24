using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the ListOpenWorkflowExecutions operation.
/// </summary>
public sealed record ListOpenWorkflowExecutionsRequest
{
    public required XAmzTarget33 XAmzTarget { get; init; }
}
