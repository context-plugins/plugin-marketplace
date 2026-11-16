using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record RefundTransfer
{
    /// <summary>
    /// The amount of the refund in cents. It must be equal to or less than the amount of the original <c>Transfer</c>.
    /// </summary>
    [JsonPropertyName("refund_amount")]
    public required int RefundAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
