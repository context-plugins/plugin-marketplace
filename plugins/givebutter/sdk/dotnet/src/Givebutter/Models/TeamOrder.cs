using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

/// <summary>
/// Team list ordering. Typical values: <c>name</c>, <c>donors</c>, <c>created_at</c>.
/// </summary>
public record TeamOrder
{
    [JsonPropertyName("name")]
    public string Name { get; } = "team_order";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
