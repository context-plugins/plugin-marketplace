using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the UntagResource operation.
/// </summary>
public sealed record UntagResourceRequest
{
    public required XAmzTarget36 XAmzTarget { get; init; }
}
