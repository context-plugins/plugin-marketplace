using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record HistoricalUsage
{
    /// <summary>
    /// the usage count during the time period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public int? Count { get; init; }

    /// <summary>
    /// ISO_TIMESTAMP of the beginning of the time period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit_start")]
    public string? UnitStart { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
