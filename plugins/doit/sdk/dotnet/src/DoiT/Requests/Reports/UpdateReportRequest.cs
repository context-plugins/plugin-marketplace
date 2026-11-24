using DoiT.Models;

namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the UpdateReport operation.
/// </summary>
public sealed record UpdateReportRequest
{
    /// <summary>
    /// Report ID. See <see href="https://developer.doit.com/docs/resource-ids">Resource IDs</see>.
    /// </summary>
    public required string Id { get; init; }

    public ExternalUpdateReport? Body { get; init; }
}
