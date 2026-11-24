using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1CaaparserRequest
{
    /// <summary>
    /// The CAA record string to parse
    /// </summary>
    [JsonPropertyName("record")]
    public required string Record { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
