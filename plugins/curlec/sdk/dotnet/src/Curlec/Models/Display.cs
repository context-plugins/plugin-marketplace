using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Display
{
    /// <summary>
    /// Custom payment method groupings with names and instruments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocks")]
    public object? Blocks { get; init; }

    /// <summary>
    /// Display order of payment method blocks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sequence")]
    public IReadOnlyList<string>? Sequence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preferences")]
    public Preferences? Preferences { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
