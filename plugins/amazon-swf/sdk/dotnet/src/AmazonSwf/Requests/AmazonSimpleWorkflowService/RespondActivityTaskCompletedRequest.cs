using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the RespondActivityTaskCompleted operation.
/// </summary>
public sealed record RespondActivityTaskCompletedRequest
{
    public required XAmzTarget12 XAmzTarget { get; init; }
}
