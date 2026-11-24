using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the DeprecateWorkflowType operation.
/// </summary>
public sealed record DeprecateWorkflowTypeRequest
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
