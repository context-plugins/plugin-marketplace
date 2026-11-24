using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the RecordActivityTaskHeartbeat operation.
/// </summary>
public sealed record RecordActivityTaskHeartbeatRequest
{
    public required XAmzTarget9 XAmzTarget { get; init; }
}
