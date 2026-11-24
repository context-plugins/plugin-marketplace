using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record IncomeInsightResponse
{
    /// <summary>
    /// Type of insight returned
    /// </summary>
    [JsonPropertyName("insightType")]
    public string InsightType { get; } = "income";

    /// <summary>
    /// Array containing income verification result
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<IncomeInsightDataItem> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
