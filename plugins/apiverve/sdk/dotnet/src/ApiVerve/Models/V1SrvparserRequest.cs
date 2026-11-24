using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1SrvparserRequest
{
    /// <summary>
    /// The SRV record string to parse
    /// </summary>
    [JsonPropertyName("record")]
    public required string Record { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
