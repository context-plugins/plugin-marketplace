using Sapling.Models;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingSentiment operation.
/// </summary>
public sealed record SaplingSentimentRequest
{
    public required ApiV1SentimentRequest Body { get; init; }
}
