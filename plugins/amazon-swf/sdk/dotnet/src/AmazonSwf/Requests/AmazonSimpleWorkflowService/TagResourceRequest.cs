using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the TagResource operation.
/// </summary>
public sealed record TagResourceRequest
{
    public required XAmzTarget35 XAmzTarget { get; init; }
}
