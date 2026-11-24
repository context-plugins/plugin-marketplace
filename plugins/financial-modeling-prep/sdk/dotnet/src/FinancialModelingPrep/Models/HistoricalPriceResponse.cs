using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinancialModelingPrep.Core.Models;

namespace FinancialModelingPrep.Models;

public record HistoricalPriceResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("symbol")]
    public string? Symbol { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("historical")]
    public IReadOnlyList<HistoricalPrice>? Historical { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
