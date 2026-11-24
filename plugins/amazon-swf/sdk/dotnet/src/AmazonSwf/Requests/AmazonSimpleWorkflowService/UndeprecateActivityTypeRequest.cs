using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the UndeprecateActivityType operation.
/// </summary>
public sealed record UndeprecateActivityTypeRequest
{
    public required XAmzTarget17 XAmzTarget { get; init; }
}
