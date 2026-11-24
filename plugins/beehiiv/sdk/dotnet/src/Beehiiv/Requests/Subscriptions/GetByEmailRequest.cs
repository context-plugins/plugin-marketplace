using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Subscriptions;

/// <summary>
/// The inputs of the GetByEmail operation.
/// </summary>
public sealed record GetByEmailRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The ID of the subscriber object
    /// </summary>
    public required string Email { get; init; }

    /// <summary>
    /// Optional list of expandable objects.&lt;br&gt;<c>subscription_premium_tiers </c> - Returns an array of tiers the subscription is associated with.&lt;br&gt;<c>referrals</c> - Returns an array of subscriptions with limited data - <c>id</c>, <c>email</c>, and <c>status</c>. These are the subscriptions that were referred by this subscription.&lt;br&gt;<c>stats</c> - Returns statistics about the subscription(s).&lt;br&gt;<c>custom_fields</c> - Returns an array of custom field values that have been set on the subscription. &lt;br&gt;<c>tags</c> - Returns an array of tags that have been set on the subscription.&lt;br&gt;<c>newsletter_lists</c> - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to.
    /// </summary>
    public SubscriptionsGetRequestExpandItem? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
