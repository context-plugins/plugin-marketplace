using System;

namespace Perigon.Requests.NewsStories;

/// <summary>
/// The inputs of the GetArticleRefreshJob operation.
/// </summary>
public sealed record GetArticleRefreshJobRequest
{
    public required Guid Id { get; init; }
}
