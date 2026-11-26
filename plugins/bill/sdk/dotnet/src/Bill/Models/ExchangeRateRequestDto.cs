using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// DTO for exchange rate request.
/// </summary>
public record ExchangeRateRequestDto
{
    /// <summary>
    /// BILL-generated ID of the international vendor to be paid. The value begins with <c>009</c>.
    /// </summary>
    [JsonPropertyName("vendorId")]
    [MinLength(1)]
    public required string VendorId { get; init; }

    /// <summary>
    /// Payment amount. The amount is in the vendor bill currency.
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
