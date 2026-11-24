using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the DeleteActivityType operation.
/// </summary>
public sealed record DeleteActivityTypeRequest
{
    public required XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi XAmzTarget { get; init; }
}
