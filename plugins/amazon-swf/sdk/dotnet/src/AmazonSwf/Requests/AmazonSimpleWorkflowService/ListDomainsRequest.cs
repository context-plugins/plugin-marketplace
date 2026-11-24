using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the ListDomains operation.
/// </summary>
public sealed record ListDomainsRequest
{
    public required XAmzTarget27 XAmzTarget { get; init; }
}
