using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the UndeprecateDomain operation.
/// </summary>
public sealed record UndeprecateDomainRequest
{
    public required XAmzTarget18 XAmzTarget { get; init; }
}
