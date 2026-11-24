using AmazonLex.Models;

namespace AmazonLex.Requests.Exports;

/// <summary>
/// The inputs of the UpdateExport operation.
/// </summary>
public sealed record UpdateExportOperationRequest
{
    public required string ExportId { get; init; }

    public UpdateExportRequest? Body { get; init; }
}
