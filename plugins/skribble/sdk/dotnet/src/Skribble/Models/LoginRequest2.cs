using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record LoginRequest2
{
    /// <summary>
    /// Your API key name
    /// </summary>
    [JsonPropertyName("username")]
    public required string Username { get; init; }

    /// <summary>
    /// Your API key secret
    /// </summary>
    [JsonPropertyName("api-key")]
    public required string ApiKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
