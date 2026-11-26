using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Core.Validation.Attributes;

namespace Bill.Models;

/// <summary>
/// API level DTO for apply vendor credit to bill request item.
/// </summary>
public record BillVendorCreditRequestItemDto
{
    /// <summary>
    /// BILL-generated ID of the vendor credit applied to the bill payment. The value begins with <c>vcr</c>.
    /// </summary>
    [JsonPropertyName("id")]
    [MinLength(1)]
    public required string Id { get; init; }

    /// <summary>
    /// Credit amount
    /// </summary>
    [JsonPropertyName("amount")]
    [Minimum(0.0)]
    public required double Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
