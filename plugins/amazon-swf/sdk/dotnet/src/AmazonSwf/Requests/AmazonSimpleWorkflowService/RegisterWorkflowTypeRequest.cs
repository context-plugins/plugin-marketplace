using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the RegisterWorkflowType operation.
/// </summary>
public sealed record RegisterWorkflowTypeRequest
{
    public required XAmzTarget25 XAmzTarget { get; init; }
}
