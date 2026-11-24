using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Source18
{
    /// <summary>
    /// 1-based position of the source in this array
    /// </summary>
    [JsonPropertyName("position")]
    public required int Position { get; init; }

    /// <summary>
    /// Title of the source page. Can be an empty string.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// URL of the source page
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Snippet that Bing shows for the source. Omitted when Bing shows none.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
