using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the CountPendingDecisionTasks2 operation.
/// </summary>
public sealed record CountPendingDecisionTasks2Request
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
