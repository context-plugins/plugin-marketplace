using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the RecordActivityTaskHeartbeat2 operation.
/// </summary>
public sealed record RecordActivityTaskHeartbeat2Request
{
    public required XAmzTarget9 XAmzTarget { get; init; }
}
