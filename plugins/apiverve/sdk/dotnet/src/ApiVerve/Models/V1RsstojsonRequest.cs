using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1RsstojsonRequest
{
    /// <summary>
    /// The URL of the RSS feed you want converted into JSON format
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
