using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the UndeprecateWorkflowType operation.
/// </summary>
public sealed record UndeprecateWorkflowTypeRequest
{
    public required XAmzTarget19 XAmzTarget { get; init; }
}
