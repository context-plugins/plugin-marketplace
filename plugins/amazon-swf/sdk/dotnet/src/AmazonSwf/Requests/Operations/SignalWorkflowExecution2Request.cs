using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the SignalWorkflowExecution2 operation.
/// </summary>
public sealed record SignalWorkflowExecution2Request
{
    public required XAmzTarget15 XAmzTarget { get; init; }
}
