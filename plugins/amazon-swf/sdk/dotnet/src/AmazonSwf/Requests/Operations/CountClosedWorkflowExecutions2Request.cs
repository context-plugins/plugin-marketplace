using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the CountClosedWorkflowExecutions2 operation.
/// </summary>
public sealed record CountClosedWorkflowExecutions2Request
{
    public required XAmzTarget XAmzTarget { get; init; }
}
