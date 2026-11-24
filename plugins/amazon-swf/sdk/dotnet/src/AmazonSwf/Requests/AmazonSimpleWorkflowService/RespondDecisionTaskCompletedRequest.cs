using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the RespondDecisionTaskCompleted operation.
/// </summary>
public sealed record RespondDecisionTaskCompletedRequest
{
    public required XAmzTarget14 XAmzTarget { get; init; }
}
