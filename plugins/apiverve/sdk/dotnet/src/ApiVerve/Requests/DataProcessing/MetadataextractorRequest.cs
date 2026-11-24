using ApiVerve.Models;

namespace ApiVerve.Requests.DataProcessing;

/// <summary>
/// The inputs of the Metadataextractor operation.
/// </summary>
public sealed record MetadataextractorRequest
{
    public required V1MetadataextractorRequest Body { get; init; }
}
