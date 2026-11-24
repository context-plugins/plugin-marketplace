using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record TagsRequest
{
    /// <summary>
    /// The name of the tag to create.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The name of the tag to create.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tag")]
    public string? Tag { get; init; }

    /// <summary>
    /// The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, pink, brown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public Color1? Color { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
