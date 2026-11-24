using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Linked external system IDs for this customer.
/// </summary>
public record CustomerConnections
{
    /// <summary>
    /// Stripe customer link, or null when no Stripe gateway account is configured.
    /// </summary>
    [JsonPropertyName("stripe")]
    public required StripeConnection Stripe { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
