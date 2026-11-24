using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

/// <summary>
/// The keyless view.
/// </summary>
public record CoverageSummary
{
    [JsonPropertyName("region")]
    public required string Region { get; init; }

    [JsonPropertyName("generated_at")]
    public required string GeneratedAt { get; init; }

    [JsonPropertyName("products")]
    public required IReadOnlyDictionary<string, object> Products { get; init; }

    /// <summary>
    /// Per product the region serves, the market keys it carries, sorted: each one a value that product's <c>markets</c> filter takes while this document is current (2up, each-way, extra-place and bog carry one each). A key under one product and not another is 400 <c>unknown_market</c> on the other's route when that route does not know it, naming the products that carry it in <c>products</c>.
    /// </summary>
    [JsonPropertyName("markets")]
    public required IReadOnlyDictionary<string, object> Markets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
