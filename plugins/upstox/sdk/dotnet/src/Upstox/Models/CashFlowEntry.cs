using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record CashFlowEntry
{
    /// <summary>
    /// Type of cash flow: Operating, Investing, or Financing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public string? Category { get; init; }

    /// <summary>
    /// Historical cash flow values for this type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("history")]
    public IReadOnlyList<HistoryItem>? History { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
