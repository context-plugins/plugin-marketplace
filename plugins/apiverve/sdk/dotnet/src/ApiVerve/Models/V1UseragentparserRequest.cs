using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1UseragentparserRequest
{
    /// <summary>
    /// The user agent string to parse
    /// </summary>
    [JsonPropertyName("ua")]
    public required string Ua { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
