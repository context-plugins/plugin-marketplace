using AmazonLex.Models;

namespace AmazonLex.Requests.Imports;

/// <summary>
/// The inputs of the DeleteImport operation.
/// </summary>
public sealed record DeleteImportOperationRequest
{
    public required string ImportId { get; init; }

    public DeleteImportRequest? Body { get; init; }
}
