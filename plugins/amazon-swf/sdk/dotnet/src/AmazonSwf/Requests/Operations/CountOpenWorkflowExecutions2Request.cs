using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the CountOpenWorkflowExecutions2 operation.
/// </summary>
public sealed record CountOpenWorkflowExecutions2Request
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
