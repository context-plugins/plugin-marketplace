using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.AnyOf;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

/// <summary>
/// Endpoint-specific data payload.
/// </summary>
public record AnyData2
{
    [JsonPropertyName("property")]
    [MinLength(1)]
    public required string Property { get; init; }

    [JsonPropertyName("checkIn")]
    [RegularExpression("^\\d{4}-\\d{2}-\\d{2}$")]
    public required string CheckIn { get; init; }

    [JsonPropertyName("checkOut")]
    [RegularExpression("^\\d{4}-\\d{2}-\\d{2}$")]
    public required string CheckOut { get; init; }

    [JsonPropertyName("currency")]
    [RegularExpression("^[A-Z]{3}$")]
    public required string Currency { get; init; }

    /// <summary>
    /// Cheapest offer IN <c>currency</c>. Offers quoted in another currency are excluded — they are not comparable.
    /// </summary>
    [JsonPropertyName("min")]
    public required Min Min { get; init; }

    /// <summary>
    /// Median offer IN <c>currency</c>, same exclusion as <c>min</c>.
    /// </summary>
    [JsonPropertyName("median")]
    public required Median Median { get; init; }

    [JsonPropertyName("offers")]
    public required IReadOnlyList<Offer> Offers { get; init; }

    /// <summary>
    /// How the comparison was produced. Absent = google-aggregator (one Google Hotels leg). 'direct_fanout' = one real price call per listing id you supplied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public Source? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
