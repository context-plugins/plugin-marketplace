using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the RespondActivityTaskCanceled operation.
/// </summary>
public sealed record RespondActivityTaskCanceledRequest
{
    public required XAmzTarget11 XAmzTarget { get; init; }
}
