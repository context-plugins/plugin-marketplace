using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the PollForDecisionTask operation.
/// </summary>
public sealed record PollForDecisionTaskRequest
{
    public required XAmzTarget8 XAmzTarget { get; init; }
}
