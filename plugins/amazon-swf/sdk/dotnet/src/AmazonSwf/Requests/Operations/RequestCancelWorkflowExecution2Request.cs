using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the RequestCancelWorkflowExecution2 operation.
/// </summary>
public sealed record RequestCancelWorkflowExecution2Request
{
    public required XAmzTarget10 XAmzTarget { get; init; }
}
