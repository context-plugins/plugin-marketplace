using Celestia.Models;

namespace Celestia.Requests.Subscribe;

/// <summary>
/// The inputs of the SubscribeToWebsiteNewsletter operation.
/// </summary>
public sealed record SubscribeToWebsiteNewsletterRequest
{
    public required SubscriptionInput Body { get; init; }
}
