namespace AmazonLex.Requests.Exports;

/// <summary>
/// The inputs of the DescribeExport operation.
/// </summary>
public sealed record DescribeExportOperationRequest
{
    public required string ExportId { get; init; }
}
