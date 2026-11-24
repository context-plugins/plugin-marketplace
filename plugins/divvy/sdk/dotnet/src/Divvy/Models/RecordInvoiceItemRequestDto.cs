using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Record invoice item dto.
/// </summary>
public record RecordInvoiceItemRequestDto
{
    /// <summary>
    /// BILL-generated ID of the invoice. The value begins with <c>00e</c>.
    /// </summary>
    [JsonPropertyName("id")]
    [MinLength(1)]
    public required string Id { get; init; }

    /// <summary>
    /// Payment amount. For a payment in an international currency (not USD), this value is in the local currency.
    /// <para>
    /// <b>Note</b>: You cannot overpay an invoice.
    /// </para>
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
