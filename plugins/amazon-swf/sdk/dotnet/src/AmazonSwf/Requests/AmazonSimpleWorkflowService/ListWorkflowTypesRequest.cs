using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the ListWorkflowTypes operation.
/// </summary>
public sealed record ListWorkflowTypesRequest
{
    public required XAmzTarget24 XAmzTarget { get; init; }
}
