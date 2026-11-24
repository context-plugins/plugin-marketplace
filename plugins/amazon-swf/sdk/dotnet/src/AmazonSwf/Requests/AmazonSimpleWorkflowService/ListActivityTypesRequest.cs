using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the ListActivityTypes operation.
/// </summary>
public sealed record ListActivityTypesRequest
{
    public required XAmzTarget21 XAmzTarget { get; init; }
}
