using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1UrltomarkdownRequest
{
    /// <summary>
    /// The URL of the webpage to convert to Markdown
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Whether to include image references in the Markdown output
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeImages")]
    public bool? IncludeImages { get; init; }

    /// <summary>
    /// Whether to include hyperlinks in the Markdown output
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeLinks")]
    public bool? IncludeLinks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
