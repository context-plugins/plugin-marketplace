using Sapling.Models;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingTone operation.
/// </summary>
public sealed record SaplingToneRequest
{
    public required ApiV1ToneRequest Body { get; init; }
}
