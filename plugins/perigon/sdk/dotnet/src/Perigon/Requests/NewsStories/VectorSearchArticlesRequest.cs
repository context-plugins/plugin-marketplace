using Perigon.Models;

namespace Perigon.Requests.NewsStories;

/// <summary>
/// The inputs of the VectorSearchArticles operation.
/// </summary>
public sealed record VectorSearchArticlesRequest
{
    public required ArticleSearchParams Body { get; init; }
}
