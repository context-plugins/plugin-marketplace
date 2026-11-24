using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record LoginRequest
{
    /// <summary>
    /// The username of the users credentials to login
    /// </summary>
    [JsonPropertyName("username")]
    public required string Username { get; init; }

    /// <summary>
    /// The API key of the users credentials to login
    /// </summary>
    [JsonPropertyName("api-key")]
    public required string ApiKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
