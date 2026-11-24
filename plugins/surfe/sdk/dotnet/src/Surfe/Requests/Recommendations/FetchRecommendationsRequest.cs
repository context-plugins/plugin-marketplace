using Surfe.Models;

namespace Surfe.Requests.Recommendations;

/// <summary>
/// The inputs of the FetchRecommendations operation.
/// </summary>
public sealed record FetchRecommendationsRequest
{
    public required RecommendationsFetchRequest Body { get; init; }
}
