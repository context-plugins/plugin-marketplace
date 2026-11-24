using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Posts;

/// <summary>
/// The inputs of the Index17 operation.
/// </summary>
public sealed record Index17Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Optionally expand the results by adding additional information. &lt;br&gt;<c>stats</c> - Adds statistics about the post(s). &lt;br&gt;<c>free_web_content</c> - Adds the web HTML rendered to a free reader. &lt;br&gt;<c>free_email_content</c> - Adds the email HTML rendered to a free reader. &lt;br&gt;<c>free_rss_content</c> - Adds the RSS feed HTML. &lt;br&gt;<c>premium_web_content</c> - Adds the web HTML rendered to a premium reader. &lt;br&gt;<c>premium_email_content</c> - Adds the email HTML rendered to a premium reader.
    /// </summary>
    public IReadOnlyList<PostExpandField>? Expand { get; init; }

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
    /// Optionally filter posts by content_tags. Adding a content tag will return any post with that content tag associated to it.&lt;br&gt;&lt;br&gt;&lt;b&gt;Example&lt;/b&gt;: Filtering for <c>content_tags: ["sales","closing"]</c> will return results of posts that have *either* <c>sales</c> or <c>closing</c> content_tags.
    /// </summary>
    public IReadOnlyList<string>? ContentTags { get; init; }

    /// <summary>
    /// Optionally filter posts by their slugs. Adding a slug will return any post with that exact slug associated to it.&lt;br&gt;&lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; Filtering for <c>slugs: ["my-first-post","another-post"]</c> will return results of posts that have *either* <c>my-first-post</c> or <c>another-post</c> as their slug.
    /// </summary>
    public IReadOnlyList<string>? Slugs { get; init; }

    /// <summary>
    /// Optionally filter posts by their authors. Adding an author name will return any post with that author associated to it (case-insensitive).&lt;br&gt;&lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; Filtering for <c>authors: ["John Doe","Jane Smith"]</c> will return results of posts that have *either* John Doe or Jane Smith as authors.
    /// </summary>
    public IReadOnlyList<string>? Authors { get; init; }

    /// <summary>
    /// Optionally filter posts by audience based on premium tiers.&lt;br&gt; This takes in an array of Display Names of the premium tiers.&lt;br&gt; It will also scope any expanded content output to the specified premium tiers.&lt;br&gt; Note: This is case insensitive.
    /// </summary>
    public IReadOnlyList<string>? PremiumTiers { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Pagination returns the results in pages. Each page contains the number of results specified by the <c>limit</c> (default: 10).&lt;br&gt;If not specified, results 1-10 from page 1 will be returned.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// The field that the results are sorted by. Defaults to created&lt;br&gt; <c>created</c> - The time in which the post was first created.&lt;br&gt; <c>publish_date</c> - The time the post was set to be published.&lt;br&gt; <c>displayed_date</c> - The time displayed in place of the <c>publish_date</c>. If no <c>displayed_date</c> was set, it will default to the <c>publish_date</c>
    /// </summary>
    public PostOrderBy OrderBy { get; init; } = PostOrderBy.Created;

    /// <summary>
    /// The direction that the results are sorted in. Defaults to asc&lt;br&gt; <c>asc</c> - Ascending, sorts from smallest to largest.&lt;br&gt; <c>desc</c> - Descending, sorts from largest to smallest.
    /// </summary>
    public RequestDirection Direction { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// Optionally filter the results by the <c>hidden_from_feed</c> attribute of the post.&lt;br&gt;<c>all</c> - Does not restrict results by <c>hidden_from_feed</c>.&lt;br&gt;<c>true</c> - Only return posts hidden from the feed.&lt;br&gt;<c>false</c> - Only return posts that are visible on the feed.
    /// </summary>
    public PostsListRequestHiddenFromFeed HiddenFromFeed { get; init; } = PostsListRequestHiddenFromFeed.All;

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
