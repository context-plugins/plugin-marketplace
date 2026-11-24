using Paid.Models;

namespace Paid.Requests.Usage;

/// <summary>
/// The inputs of the UsageRecordBulkV2 operation.
/// </summary>
public sealed record UsageRecordBulkV2Request
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public UsageV2SignalsBulkRequest? Body { get; init; }
}
