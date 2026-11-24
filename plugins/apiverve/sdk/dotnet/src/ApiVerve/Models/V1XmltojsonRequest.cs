using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1XmltojsonRequest
{
    /// <summary>
    /// The XML content to convert to JSON
    /// </summary>
    [JsonPropertyName("xml")]
    public required string Xml { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
