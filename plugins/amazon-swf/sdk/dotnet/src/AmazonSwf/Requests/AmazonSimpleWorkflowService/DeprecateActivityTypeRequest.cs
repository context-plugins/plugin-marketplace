using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the DeprecateActivityType operation.
/// </summary>
public sealed record DeprecateActivityTypeRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
