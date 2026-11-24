using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1HtmlentitiesRequest
{
    /// <summary>
    /// The HTML content to encode
    /// </summary>
    [JsonPropertyName("html")]
    public required string Html { get; init; }

    /// <summary>
    /// The action to perform
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    public string? Action { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
