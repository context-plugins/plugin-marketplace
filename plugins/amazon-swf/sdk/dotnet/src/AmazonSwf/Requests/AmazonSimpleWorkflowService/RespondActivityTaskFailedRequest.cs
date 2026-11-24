using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the RespondActivityTaskFailed operation.
/// </summary>
public sealed record RespondActivityTaskFailedRequest
{
    public required XAmzTarget13 XAmzTarget { get; init; }
}
