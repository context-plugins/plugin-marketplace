using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the DeleteWorkflowType operation.
/// </summary>
public sealed record DeleteWorkflowTypeRequest
{
    public required XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi XAmzTarget { get; init; }
}
