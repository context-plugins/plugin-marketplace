using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the DescribeDomain operation.
/// </summary>
public sealed record DescribeDomainRequest
{
    public required XAmzTarget26 XAmzTarget { get; init; }
}
