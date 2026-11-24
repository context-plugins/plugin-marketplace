using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Posts;

/// <summary>
/// The inputs of the Show12 operation.
/// </summary>
public sealed record Show12Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the post object
    /// </summary>
    public required string PostId { get; init; }

    /// <summary>
    /// Optionally expand the results by adding additional information. &lt;br&gt;<c>stats</c> - Adds statistics about the post(s). &lt;br&gt;<c>free_web_content</c> - Adds the web HTML rendered to a free reader. &lt;br&gt;<c>free_email_content</c> - Adds the email HTML rendered to a free reader. &lt;br&gt;<c>free_rss_content</c> - Adds the RSS feed HTML. &lt;br&gt;<c>premium_web_content</c> - Adds the web HTML rendered to a premium reader. &lt;br&gt;<c>premium_email_content</c> - Adds the email HTML rendered to a premium reader.
    /// </summary>
    public IReadOnlyList<PostExpandField>? Expand { get; init; }

    /// <summary>
    /// Scope any expanded content output to the specified premium tiers.&lt;br&gt; This takes in an array of Display Names of the premium tiers.&lt;br&gt; Note: This is case insensitive.
    /// </summary>
    public IReadOnlyList<string>? PremiumTiers { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
