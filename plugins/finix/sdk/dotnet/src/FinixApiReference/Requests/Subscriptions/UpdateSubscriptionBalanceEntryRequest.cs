using FinixApiReference.Models;

namespace FinixApiReference.Requests.Subscriptions;

/// <summary>
/// The inputs of the UpdateSubscriptionBalanceEntry operation.
/// </summary>
public sealed record UpdateSubscriptionBalanceEntryRequest
{
    /// <summary>
    /// The ID of the <c>Subscription</c>.
    /// </summary>
    public required string SubscriptionId { get; init; }

    /// <summary>
    /// The ID of the <c>Subscription Balance Entry</c>.
    /// </summary>
    public required string SubscriptionBalanceEntryId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required UpdateSubscriptionBalanceEntry Body { get; init; }
}
