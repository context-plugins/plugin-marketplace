using Paid.Models;

namespace Paid.Requests.Usage;

/// <summary>
/// The inputs of the RecordBulk operation.
/// </summary>
public sealed record RecordBulkRequest
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public UsageSignalsBulkRequest? Body { get; init; }
}
