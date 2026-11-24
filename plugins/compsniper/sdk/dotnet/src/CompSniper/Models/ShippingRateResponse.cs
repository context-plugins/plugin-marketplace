using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation.Attributes;

namespace CompSniper.Models;

public record ShippingRateResponse
{
    [JsonPropertyName("source")]
    public string Source { get; } = "ebay_shipping_calculator";

    [JsonPropertyName("rateType")]
    public string RateType { get; } = "estimate";

    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    /// <summary>
    /// Services currently applicable to the submitted package and content declarations.
    /// </summary>
    [JsonPropertyName("totalRates")]
    [Minimum(1)]
    public required int TotalRates { get; init; }

    /// <summary>
    /// Additional services requiring specific carrier packaging or eligible contents.
    /// </summary>
    [JsonPropertyName("totalConditionalRates")]
    [Minimum(0)]
    public required int TotalConditionalRates { get; init; }

    [JsonPropertyName("fetchedAt")]
    public required DateTimeOffset FetchedAt { get; init; }

    [JsonPropertyName("validUntil")]
    public required DateTimeOffset ValidUntil { get; init; }

    [JsonPropertyName("requestId")]
    public required Guid RequestId { get; init; }

    [JsonPropertyName("rates")]
    [MinLength(1)]
    public required IReadOnlyList<ShippingRate> Rates { get; init; }

    [JsonPropertyName("conditionalRates")]
    public required IReadOnlyList<ShippingRate> ConditionalRates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
