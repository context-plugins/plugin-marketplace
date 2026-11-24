using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Segments;

/// <summary>
/// The inputs of the ListMembers operation.
/// </summary>
public sealed record ListMembersRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the segment object
    /// </summary>
    public required string SegmentId { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Pagination returns the results in pages. Each page contains the number of results specified by the <c>limit</c> (default: 10).&lt;br&gt;If not specified, results 1-10 from page 1 will be returned.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// Optionally expand the response to include additional data. &lt;br&gt; <c>stats</c> - Returns statistics about the subscription(s). &lt;br&gt; <c>custom_fields</c> - Returns custom field values set on the subscription. &lt;br&gt; <c>referrals</c> - Returns referrals made by the subscription. &lt;br&gt; <c>tags</c> - Returns tags associated with the subscription. &lt;br&gt; <c>subscription_premium_tiers</c> - Returns premium tier(s) the subscription is subscribed to.
    /// </summary>
    public IReadOnlyList<SegmentMembersExpandItems>? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
