namespace Soda.Requests.Scans;

/// <summary>
/// The inputs of the GetApiV1ScansScanIdLogs operation.
/// </summary>
public sealed record GetApiV1ScansScanIdLogsRequest
{
    public required string ScanId { get; init; }

    public int? Page { get; init; }

    public int? Size { get; init; }
}
