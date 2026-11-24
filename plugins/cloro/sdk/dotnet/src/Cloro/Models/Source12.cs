using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Source12
{
    /// <summary>
    /// The position index of the source in the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public double? Position { get; init; }

    /// <summary>
    /// The URL of the source
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// The article title of the source
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// A snippet or summary of the source content
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// <c>false</c> for a page the answer cites inline, <c>true</c> for a page ChatGPT used but does not cite. Cited pages come first.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("footnote")]
    public bool? Footnote { get; init; }

    /// <summary>
    /// The publication date of the source. Omitted from the response when the source has no publish date — never emitted as <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datePublished")]
    public string? DatePublished { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
