using Sapling.Models;

namespace Sapling.Requests.Detection;

/// <summary>
/// The inputs of the SaplingProfanity operation.
/// </summary>
public sealed record SaplingProfanityRequest
{
    public required ApiV1ProfanityRequest Body { get; init; }
}
