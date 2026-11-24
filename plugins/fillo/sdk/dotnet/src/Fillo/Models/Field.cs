using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record Field
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("kind")]
    public required string Kind { get; init; }

    /// <summary>
    /// How many accepted responses answered this field.
    /// </summary>
    [JsonPropertyName("answered")]
    public required int Answered { get; init; }

    /// <summary>
    /// Option label → count, present only for choice-like fields (top 20 by count).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("distribution")]
    public IReadOnlyDictionary<string, int>? Distribution { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
