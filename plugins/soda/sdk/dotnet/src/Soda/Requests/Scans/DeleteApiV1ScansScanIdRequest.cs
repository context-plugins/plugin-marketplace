namespace Soda.Requests.Scans;

/// <summary>
/// The inputs of the DeleteApiV1ScansScanId operation.
/// </summary>
public sealed record DeleteApiV1ScansScanIdRequest
{
    public required string ScanId { get; init; }
}
