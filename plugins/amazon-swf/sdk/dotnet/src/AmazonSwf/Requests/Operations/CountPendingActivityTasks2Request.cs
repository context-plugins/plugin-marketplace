using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the CountPendingActivityTasks2 operation.
/// </summary>
public sealed record CountPendingActivityTasks2Request
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
