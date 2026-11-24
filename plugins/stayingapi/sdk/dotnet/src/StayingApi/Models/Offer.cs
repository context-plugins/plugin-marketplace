using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation;
using StayingApi.Core.Validation.Attributes;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

public record Offer
{
    /// <summary>
    /// The seller. Google mode: the OTA name Google reported. Direct mode: the platform you supplied.
    /// </summary>
    [JsonPropertyName("ota")]
    [MinLength(1)]
    public required string Ota { get; init; }

    [JsonPropertyName("totalPrice")]
    [Minimum(0.0)]
    public required double TotalPrice { get; init; }

    [JsonPropertyName("currency")]
    [RegularExpression("^[A-Z]{3}$")]
    public required string Currency { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// DIRECT MODE ONLY. The platform this leg was priced on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public Platform2? Platform { get; init; }

    /// <summary>
    /// DIRECT MODE ONLY. The platform-native listing id you supplied for this leg.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listingId")]
    [MinLength(1)]
    public string? ListingId { get; init; }

    /// <summary>
    /// DIRECT MODE ONLY. Per-night price for the requested stay.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nightlyPrice")]
    [Minimum(0.0)]
    public double? NightlyPrice { get; init; }

    /// <summary>
    /// DIRECT MODE ONLY, and BEST-EFFORT: fee coverage differs per platform. Airbnb reports cleaning, service and taxes; Booking.com reports taxes only; Vrbo and Google report none (all null). Compare on totalPrice — it is present and comparable on every platform. Never assume a null fee means the platform does not charge it; it means we could not read it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fees")]
    public Fees1? Fees { get; init; }

    /// <summary>
    /// DIRECT MODE ONLY. Nights priced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nights")]
    [Maximum(2147483647)]
    [ExclusiveMinimum(0)]
    public int? Nights { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
