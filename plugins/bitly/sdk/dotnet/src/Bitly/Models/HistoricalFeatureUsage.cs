using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record HistoricalFeatureUsage
{
    /// <summary>
    /// feature name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public IReadOnlyList<HistoricalUsage>? Usage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
