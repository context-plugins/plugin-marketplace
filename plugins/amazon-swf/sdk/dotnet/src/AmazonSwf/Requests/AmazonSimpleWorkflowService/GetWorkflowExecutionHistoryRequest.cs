using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the GetWorkflowExecutionHistory operation.
/// </summary>
public sealed record GetWorkflowExecutionHistoryRequest
{
    public required XAmzTarget31 XAmzTarget { get; init; }
}
