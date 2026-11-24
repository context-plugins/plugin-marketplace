using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.Enums;

namespace OddsRelay.Models;

public record Regions1
{
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("requestable")]
    public required bool Requestable { get; init; }

    /// <summary>
    /// Bookmakers with rows now.
    /// </summary>
    [JsonPropertyName("bookmakers")]
    public required int Bookmakers { get; init; }

    [JsonPropertyName("exchanges")]
    public required IReadOnlyList<string> Exchanges { get; init; }

    [JsonPropertyName("matched_coverage")]
    public required bool MatchedCoverage { get; init; }

    [JsonPropertyName("coverage_model")]
    public required CoverageModel CoverageModel { get; init; }

    [JsonPropertyName("exchange_available")]
    public required bool ExchangeAvailable { get; init; }

    [JsonPropertyName("board")]
    public required Board Board { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
