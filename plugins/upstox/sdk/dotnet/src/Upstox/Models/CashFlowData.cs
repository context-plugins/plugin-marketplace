using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record CashFlowData
{
    /// <summary>
    /// Report type: consolidated or standalone
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Time period: yearly or quarterly
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("time_period")]
    public string? TimePeriod { get; init; }

    /// <summary>
    /// Unit of monetary values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("units_in")]
    public string? UnitsIn { get; init; }

    /// <summary>
    /// Cash flow entries grouped by type (Operating, Investing, Financing)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cash_flow")]
    public IReadOnlyList<CashFlowEntry>? CashFlow { get; init; }

    /// <summary>
    /// List of financial statement cash flow items with historical values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("full_statement")]
    public IReadOnlyList<FinancialStatementEntry>? FullStatement { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
