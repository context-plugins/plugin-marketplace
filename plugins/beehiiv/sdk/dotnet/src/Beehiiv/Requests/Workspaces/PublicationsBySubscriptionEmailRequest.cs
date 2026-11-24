using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Workspaces;

/// <summary>
/// The inputs of the PublicationsBySubscriptionEmail operation.
/// </summary>
public sealed record PublicationsBySubscriptionEmailRequest
{
    /// <summary>
    /// The email address to search for subscriptions
    /// </summary>
    public required string Email { get; init; }

    /// <summary>
    /// Optionally expand the results by adding additional information. &lt;br&gt;<c>subscription</c> - Returns the full Subscription object for the email address in each publication. &lt;br&gt;<c>publication</c> - Returns the full Publication object instead of just ID and name. &lt;br&gt;<c>subscription_custom_fields</c> - Returns custom field values nested within the subscription object. (Returns the subscription object regardless of whether <c>subscription</c> is requested.)
    /// </summary>
    public IReadOnlyList<PublicationsBySubscriptionEmailRequestExpandItem>? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
