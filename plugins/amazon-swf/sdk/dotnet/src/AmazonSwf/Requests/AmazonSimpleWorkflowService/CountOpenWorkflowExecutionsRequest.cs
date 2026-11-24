using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the CountOpenWorkflowExecutions operation.
/// </summary>
public sealed record CountOpenWorkflowExecutionsRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
