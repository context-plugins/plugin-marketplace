using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Stripe customer link, or null when no Stripe gateway account is configured.
/// </summary>
public record StripeConnection
{
    /// <summary>
    /// Stripe customer ID.
    /// </summary>
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
