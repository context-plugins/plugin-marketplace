using System.Text.Json.Serialization;
using Rendex.Core.Models;

namespace Rendex.Models;

/// <summary>
/// PDF page margins as CSS values (e.g. '1cm', '24px').
/// </summary>
public record Margin
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top")]
    public string? Top { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("right")]
    public string? Right { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bottom")]
    public string? Bottom { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("left")]
    public string? Left { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
