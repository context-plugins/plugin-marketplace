using Sapling.Models;

namespace Sapling.Requests.Files;

/// <summary>
/// The inputs of the SaplingChunkHtml operation.
/// </summary>
public sealed record SaplingChunkHtmlRequest
{
    public required ApiV1IngestChunkHtmlRequest Body { get; init; }
}
