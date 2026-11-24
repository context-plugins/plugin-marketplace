using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the RegisterDomain operation.
/// </summary>
public sealed record RegisterDomainRequest
{
    public required XAmzTarget28 XAmzTarget { get; init; }
}
