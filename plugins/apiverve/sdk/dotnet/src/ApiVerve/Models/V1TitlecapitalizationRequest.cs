using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1TitlecapitalizationRequest
{
    /// <summary>
    /// The text to convert to title case
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// The case to convert the text to
    /// </summary>
    [JsonPropertyName("style")]
    public required string Style { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
