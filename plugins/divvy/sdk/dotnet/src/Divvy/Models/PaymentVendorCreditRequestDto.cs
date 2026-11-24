using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Models;

/// <summary>
/// Payment vendor credit request DTO.
/// </summary>
public record PaymentVendorCreditRequestDto
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
