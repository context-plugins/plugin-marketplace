namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the DeleteReport operation.
/// </summary>
public sealed record DeleteReportRequest
{
    /// <summary>
    /// Report ID. See <see href="https://developer.doit.com/docs/resource-ids">Resource IDs</see>.
    /// </summary>
    public required string Id { get; init; }
}
