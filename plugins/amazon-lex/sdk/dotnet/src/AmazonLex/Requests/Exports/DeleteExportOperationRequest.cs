using AmazonLex.Models;

namespace AmazonLex.Requests.Exports;

/// <summary>
/// The inputs of the DeleteExport operation.
/// </summary>
public sealed record DeleteExportOperationRequest
{
    public required string ExportId { get; init; }

    public DeleteExportRequest? Body { get; init; }
}
