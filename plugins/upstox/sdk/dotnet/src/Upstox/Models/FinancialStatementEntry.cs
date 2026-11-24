using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record FinancialStatementEntry
{
    /// <summary>
    /// Type of financial statement line item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("particular")]
    public string? Particular { get; init; }

    /// <summary>
    /// Historical values for this statement line item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("history")]
    public IReadOnlyList<HistoryItem>? History { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
