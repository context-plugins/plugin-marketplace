using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.AnyOf;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

public record RadarTickerContext
{
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    [JsonPropertyName("cik")]
    public required Cik Cik { get; init; }

    [JsonPropertyName("status")]
    public required Status2 Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason111? Reason { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filings_count")]
    public FilingsCount? FilingsCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filings")]
    public IReadOnlyList<RadarFilingContext>? Filings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cluster_buys_count")]
    public ClusterBuysCount? ClusterBuysCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cluster_buys")]
    public IReadOnlyList<RadarClusterContext>? ClusterBuys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
