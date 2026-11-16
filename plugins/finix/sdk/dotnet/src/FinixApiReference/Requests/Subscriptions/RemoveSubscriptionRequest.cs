namespace FinixApiReference.Requests.Subscriptions;

/// <summary>
/// The inputs of the RemoveSubscription operation.
/// </summary>
public sealed record RemoveSubscriptionRequest
{
    /// <summary>
    /// The <c>Subscription</c> ID.
    /// </summary>
    public required string SubscriptionId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
