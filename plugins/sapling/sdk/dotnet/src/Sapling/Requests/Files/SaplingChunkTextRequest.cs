using Sapling.Models;

namespace Sapling.Requests.Files;

/// <summary>
/// The inputs of the SaplingChunkText operation.
/// </summary>
public sealed record SaplingChunkTextRequest
{
    public required ApiV1IngestChunkTextRequest Body { get; init; }
}
