using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the TerminateWorkflowExecution2 operation.
/// </summary>
public sealed record TerminateWorkflowExecution2Request
{
    public required XAmzTarget16 XAmzTarget { get; init; }
}
