using AmazonLex.Models;

namespace AmazonLex.Requests.Imports;

/// <summary>
/// The inputs of the StartImport operation.
/// </summary>
public sealed record StartImportOperationRequest
{
    public StartImportRequest? Body { get; init; }
}
