using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation.Attributes;

namespace JuriSign.Models;

/// <summary>
/// Request a payment from the signer once they've signed ("sign then pay" — the signature is never blocked by payment). Requires an active Stripe Connect account for your organization (see Settings &gt; Paiement à la signature), or the request is rejected with a 422. JuriSign never holds the funds: they go directly to your own Stripe account, minus a fixed 0.90€ platform fee.
/// </summary>
public record Payment
{
    /// <summary>
    /// Amount to collect from the signer, in cents.
    /// </summary>
    [JsonPropertyName("amount_cents")]
    [Minimum(50)]
    public required int AmountCents { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; } = "eur";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(255)]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
