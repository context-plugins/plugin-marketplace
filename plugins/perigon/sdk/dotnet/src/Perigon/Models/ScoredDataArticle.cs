using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

public record ScoredDataArticle
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public double? Score { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Article? Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vectors")]
    public IReadOnlyList<VectorData>? Vectors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
