using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the DeprecateDomain operation.
/// </summary>
public sealed record DeprecateDomainRequest
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
