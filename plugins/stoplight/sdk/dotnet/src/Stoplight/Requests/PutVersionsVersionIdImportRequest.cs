using Stoplight.Models;

namespace Stoplight.Requests;

/// <summary>
/// The inputs of the PutVersionsVersionIdImport operation.
/// </summary>
public sealed record PutVersionsVersionIdImportRequest
{
    /// <summary>
    /// This is the unique identifier for the version.
    /// </summary>
    public required string VersionId { get; init; }

    public VersionsImportRequest? Body { get; init; }
}
