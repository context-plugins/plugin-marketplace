using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Recommendations;

/// <summary>
/// The inputs of the ListRecommendations operation.
/// </summary>
public sealed record ListRecommendationsRequest
{
    public RecommendationsRequest? Body { get; init; }
}
