using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the RegisterActivityType operation.
/// </summary>
public sealed record RegisterActivityTypeRequest
{
    public required XAmzTarget22 XAmzTarget { get; init; }
}
