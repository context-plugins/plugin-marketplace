using AmazonLex.Models;

namespace AmazonLex.Requests.Exports;

/// <summary>
/// The inputs of the CreateExport operation.
/// </summary>
public sealed record CreateExportOperationRequest
{
    public CreateExportRequest? Body { get; init; }
}
