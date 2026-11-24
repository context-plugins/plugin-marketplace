using Perigon.Models;

namespace Perigon.Requests.NewsStories;

/// <summary>
/// The inputs of the SubmitArticleRefreshJob operation.
/// </summary>
public sealed record SubmitArticleRefreshJobRequest
{
    public required ArticleRefreshSubmitRequest Body { get; init; }
}
