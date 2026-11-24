using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1JwtdecoderRequest
{
    /// <summary>
    /// JWT token to decode
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
