using Perigon.Models;

namespace Perigon.Requests.NewsStories;

/// <summary>
/// The inputs of the PeekArticleRefresh operation.
/// </summary>
public sealed record PeekArticleRefreshRequest
{
    public required ArticleRefreshSubmitRequest Body { get; init; }
}
