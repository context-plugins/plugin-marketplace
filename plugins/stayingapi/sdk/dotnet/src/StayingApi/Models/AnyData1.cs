using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation;
using StayingApi.Core.Validation.Attributes;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

/// <summary>
/// Endpoint-specific data payload.
/// </summary>
public record AnyData1
{
    [JsonPropertyName("platform")]
    public required Platform Platform { get; init; }

    [JsonPropertyName("listingId")]
    [MinLength(1)]
    public required string ListingId { get; init; }

    [JsonPropertyName("currency")]
    [RegularExpression("^[A-Z]{3}$")]
    public required string Currency { get; init; }

    [JsonPropertyName("nightlyPrice")]
    [Minimum(0.0)]
    public required double NightlyPrice { get; init; }

    [JsonPropertyName("totalPrice")]
    [Minimum(0.0)]
    public required double TotalPrice { get; init; }

    [JsonPropertyName("fees")]
    public required Fees Fees { get; init; }

    [JsonPropertyName("nights")]
    [Maximum(2147483647)]
    [ExclusiveMinimum(0)]
    public required int Nights { get; init; }

    [JsonPropertyName("occupancy")]
    public required Occupancy Occupancy { get; init; }

    [JsonPropertyName("source")]
    [MinLength(1)]
    public required string Source { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
