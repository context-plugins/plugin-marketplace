using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hud.Models;

/// <summary>
/// One observation feature group: per-dimension labels + values.
/// </summary>
public record StateFeature
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("names")]
    public IReadOnlyList<string>? Names { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<double>? Values { get; init; }
}
