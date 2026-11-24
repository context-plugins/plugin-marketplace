namespace Soda.Requests.Scans;

/// <summary>
/// The inputs of the GetApiV1ScansScanId operation.
/// </summary>
public sealed record GetApiV1ScansScanIdRequest
{
    public required string ScanId { get; init; }
}
