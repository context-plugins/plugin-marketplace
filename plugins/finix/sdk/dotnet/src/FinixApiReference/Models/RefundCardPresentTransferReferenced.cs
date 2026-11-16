using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Request fields to perform a <see href="/guides/after-the-payment/refunds#referenced-refunds">referenced refund</see>.
/// </summary>
public record RefundCardPresentTransferReferenced
{
    /// <summary>
    /// The ID of the <c>Device</c> the <c>Transfer</c> was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public string? Device { get; init; }

    /// <summary>
    /// The amount of the refund in cents. It must be equal to or less than the amount of the original <c>Transfer</c>.
    /// </summary>
    [JsonPropertyName("refund_amount")]
    public required int RefundAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
