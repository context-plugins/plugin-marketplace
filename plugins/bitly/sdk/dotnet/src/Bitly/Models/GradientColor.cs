using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record GradientColor
{
    /// <summary>
    /// A color in hexadecimal format to be used in one of the gradient's &lt;stop&gt; elements
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public string? Color { get; init; }

    /// <summary>
    /// A number between 0-100 denoting the offset of the gradient color, interpreted as a percentage
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public int? Offset { get; init; } = 0;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
