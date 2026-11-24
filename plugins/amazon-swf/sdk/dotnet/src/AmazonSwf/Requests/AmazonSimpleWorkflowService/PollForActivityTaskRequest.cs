using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the PollForActivityTask operation.
/// </summary>
public sealed record PollForActivityTaskRequest
{
    public required XAmzTarget7 XAmzTarget { get; init; }
}
