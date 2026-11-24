using System.Collections.Generic;
using System.Text.Json.Serialization;
using Rendex.Core.Models;

namespace Rendex.Models;

/// <summary>
/// Present for text/both runs; null otherwise
/// </summary>
public record TextDiff
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("added")]
    public IReadOnlyList<string>? Added { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removed")]
    public IReadOnlyList<string>? Removed { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
