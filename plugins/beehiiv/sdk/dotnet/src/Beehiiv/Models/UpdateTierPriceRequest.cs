using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record UpdateTierPriceRequest
{
    /// <summary>
    /// ID of the existing price.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("currency")]
    public required TierPriceCurrency Currency { get; init; }

    [JsonPropertyName("amount_cents")]
    public required int AmountCents { get; init; }

    [JsonPropertyName("interval")]
    public required TierPriceInterval Interval { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interval_display")]
    public string? IntervalDisplay { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cta")]
    public string? Cta { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("features")]
    public IReadOnlyList<string>? Features { get; init; }

    /// <summary>
    /// Optionally delete the price when updating the tier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delete")]
    public bool? Delete { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
