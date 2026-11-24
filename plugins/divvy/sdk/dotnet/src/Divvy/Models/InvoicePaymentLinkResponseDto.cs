using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Invoice Payment Link Response Dto.
/// </summary>
public record InvoicePaymentLinkResponseDto
{
    /// <summary>
    /// Invoice payment link
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentLink")]
    public string? PaymentLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
