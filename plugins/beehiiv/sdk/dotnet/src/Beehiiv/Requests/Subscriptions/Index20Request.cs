using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Subscriptions;

/// <summary>
/// The inputs of the Index20 operation.
/// </summary>
public sealed record Index20Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Optional list of expandable objects.&lt;br&gt;<c>subscription_premium_tiers </c> - Returns an array of tiers the subscription is associated with.&lt;br&gt;<c>referrals</c> - Returns an array of subscriptions with limited data - <c>id</c>, <c>email</c>, and <c>status</c>. These are the subscriptions that were referred by this subscription.&lt;br&gt;<c>stats</c> - Returns statistics about the subscription(s).&lt;br&gt;<c>custom_fields</c> - Returns an array of custom field values that have been set on the subscription. &lt;br&gt;<c>newsletter_lists</c> - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to.
    /// </summary>
    public SubscriptionsListRequestExpandItem? Expand { get; init; }

    /// <summary>
    /// Optionally filter the results by a status
    /// </summary>
    public SubscriptionsListRequestStatus Status { get; init; } = SubscriptionsListRequestStatus.All;

    /// <summary>
    /// Optionally filter the results by a their tier
    /// </summary>
    public SubscriptionsListRequestTier Tier { get; init; } = SubscriptionsListRequestTier.All;

    /// <summary>
    /// Optionally filter the results by one or multiple premium tiers
    /// </summary>
    public string? PremiumTiers { get; init; }

    /// <summary>
    /// Optionally filter the results by one or multiple premium tier ids
    /// </summary>
    public string? PremiumTierIds { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// <b>Cursor-based pagination (recommended)</b>: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination. See the <see href="/welcome/pagination">Pagination Guide</see> for more details.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// <b>Offset-based pagination (deprecated)</b>: Page number for offset-based pagination. This method is deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination using the <c>cursor</c> parameter. If not specified, results 1-10 from page 1 will be returned. See the <see href="/welcome/pagination">Pagination Guide</see> for migration guidance.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// Optional email address to find a subscription.&lt;br&gt;This param must be an exact match and is case insensitive.
    /// </summary>
    public string? Email { get; init; }

    /// <summary>
    /// The field that the results are sorted by. Defaults to created&lt;br&gt; <c>created</c> - The time in which the subscription was first created.&lt;br&gt;
    /// </summary>
    public SubscriptionsListRequestOrderBy OrderBy { get; init; } = SubscriptionsListRequestOrderBy.Created;

    /// <summary>
    /// The direction that the results are sorted in. Defaults to asc&lt;br&gt; <c>asc</c> - Ascending, sorts from smallest to largest.&lt;br&gt; <c>desc</c> - Descending, sorts from largest to smallest.
    /// </summary>
    public RequestDirection Direction { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// Optional date entry (in the format YYYY/MM/DD) that filters returned subscriptions by their creation date.
    /// </summary>
    public string? CreationDate { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
