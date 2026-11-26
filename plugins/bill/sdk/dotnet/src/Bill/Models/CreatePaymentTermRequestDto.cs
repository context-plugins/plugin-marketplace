using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Core.Validation.Attributes;

namespace Bill.Models;

/// <summary>
/// Create a payment term
/// </summary>
public record CreatePaymentTermRequestDto
{
    /// <summary>
    /// Payment term name. Examples include <c>Net 30</c> and <c>Due upon receipt</c>.
    /// </summary>
    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    /// <summary>
    /// Number of days until payment is due
    /// </summary>
    [JsonPropertyName("daysDue")]
    [Minimum(0)]
    [Maximum(999)]
    public required int DaysDue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
