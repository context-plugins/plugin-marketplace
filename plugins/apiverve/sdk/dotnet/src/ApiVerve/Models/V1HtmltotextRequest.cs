using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1HtmltotextRequest
{
    /// <summary>
    /// The HTML to convert to text
    /// </summary>
    [JsonPropertyName("html")]
    public required string Html { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
