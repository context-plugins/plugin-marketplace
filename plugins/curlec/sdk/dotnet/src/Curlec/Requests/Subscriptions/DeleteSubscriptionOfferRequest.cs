namespace Curlec.Requests.Subscriptions;

/// <summary>
/// The inputs of the DeleteSubscriptionOffer operation.
/// </summary>
public sealed record DeleteSubscriptionOfferRequest
{
    /// <summary>
    /// Subscription ID (sub_*).
    /// </summary>
    public required string SubId { get; init; }

    /// <summary>
    /// Offer ID to remove.
    /// </summary>
    public required string OfferId { get; init; }
}
