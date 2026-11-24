using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Models;

/// <summary>
/// Update a payment term
/// </summary>
public record UpdatePaymentTermRequestDto
{
    /// <summary>
    /// Payment term name. Examples include <c>Net 30</c> and <c>Due upon receipt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Number of days until payment is due
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysDue")]
    [Minimum(0)]
    [Maximum(999)]
    public int? DaysDue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
