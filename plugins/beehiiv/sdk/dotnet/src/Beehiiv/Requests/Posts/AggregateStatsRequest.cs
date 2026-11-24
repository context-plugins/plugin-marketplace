using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Posts;

/// <summary>
/// The inputs of the AggregateStats operation.
/// </summary>
public sealed record AggregateStatsRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Optionally filter the results by audience
    /// </summary>
    public PostAudienceFilter Audience { get; init; } = PostAudienceFilter.All;

    /// <summary>
    /// Optionally filter the results by platform.&lt;br&gt;<c>web</c> - Posts only published to web.&lt;br&gt;<c>email</c> - Posts only published to email.&lt;br&gt;<c>both</c> - Posts published to email and web.&lt;br&gt;<c>all</c> - Does not restrict results by platform.
    /// </summary>
    public PostPlatformFilter Platform { get; init; } = PostPlatformFilter.All;

    /// <summary>
    /// Optionally filter the results by the status of the post.&lt;br&gt;<c>draft</c> - not been scheduled.&lt;br&gt;<c>confirmed</c> - The post will be active after the <c>scheduled_at</c>.&lt;br&gt;<c>archived</c> - The post is no longer active.&lt;br&gt;<c>all</c> - Does not restrict results by status.
    /// </summary>
    public PostStatusFilter Status { get; init; } = PostStatusFilter.All;

    /// <summary>
    /// Optionally filter posts by content_tags. Adding a content tag will return any post with that content tag associated to it.&lt;br&gt;Example: Filtering for <c>content_tags: ["sales","closing"]</c> will return results of posts that have *either* sales or closing content_tags.
    /// </summary>
    public IReadOnlyList<string>? ContentTags { get; init; }

    /// <summary>
    /// Optionally filter posts by their authors. Adding an author name will return any post with that author associated to it (case-insensitive).&lt;br&gt;&lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; Filtering for <c>authors: ["John Doe","Jane Smith"]</c> will return results of posts that have *either* John Doe or Jane Smith as authors.
    /// </summary>
    public IReadOnlyList<string>? Authors { get; init; }

    /// <summary>
    /// Optionally filter the results by the <c>hidden_from_feed</c> attribute of the post.&lt;br&gt;<c>all</c> - Does not restrict results by <c>hidden_from_feed</c>.&lt;br&gt;<c>true</c> - Only return posts hidden from the feed.&lt;br&gt;<c>false</c> - Only return posts that are visible on the feed.
    /// </summary>
    public PostsListRequestHiddenFromFeed HiddenFromFeed { get; init; } = PostsListRequestHiddenFromFeed.All;

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
