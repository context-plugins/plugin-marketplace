namespace Beehiiv.Requests.Subscriptions;

/// <summary>
/// The inputs of the Delete5 operation.
/// </summary>
public sealed record Delete5Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the subscription object
    /// </summary>
    public required string SubscriptionId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
