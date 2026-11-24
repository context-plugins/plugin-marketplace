using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the ListTagsForResource operation.
/// </summary>
public sealed record ListTagsForResourceRequest
{
    public required XAmzTarget34 XAmzTarget { get; init; }
}
