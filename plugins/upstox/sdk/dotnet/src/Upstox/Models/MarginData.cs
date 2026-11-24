using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record MarginData
{
    /// <summary>
    /// Response data for instrument margin details
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("margins")]
    public IReadOnlyList<Margin>? Margins { get; init; }

    /// <summary>
    /// Total margin required to execute the orders
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required_margin")]
    public double? RequiredMargin { get; init; }

    /// <summary>
    /// Total margin after margin benefit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("final_margin")]
    public double? FinalMargin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
