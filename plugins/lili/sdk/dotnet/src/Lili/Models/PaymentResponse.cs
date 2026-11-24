using System.Text.Json.Serialization;
using Lili.Core.Models;
using Lili.Models.Enums;

namespace Lili.Models;

public record PaymentResponse
{
    /// <summary>
    /// The payment ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentId")]
    public string? PaymentId { get; init; }

    /// <summary>
    /// The payment details
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    /// <summary>
    /// The payment status
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
