using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Invoice Payment request.
/// </summary>
public record InvoicePayRequestDto
{
    /// <summary>
    /// BILL-generated ID of the invoice. The value begins with <c>00e</c>.
    /// </summary>
    [JsonPropertyName("invoiceId")]
    public required string InvoiceId { get; init; }

    /// <summary>
    /// Payment amount. For a payment in an international currency (not USD), this value is in the local currency.
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
