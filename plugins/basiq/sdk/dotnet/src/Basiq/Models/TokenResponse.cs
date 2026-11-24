using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record TokenResponse
{
    /// <summary>
    /// The generated access token.
    /// </summary>
    [JsonPropertyName("access_token")]
    public required string AccessToken { get; init; }

    /// <summary>
    /// Expires in 3600 seconds
    /// </summary>
    [JsonPropertyName("expires_in")]
    public required long ExpiresIn { get; init; }

    /// <summary>
    /// This value will always be <c>Bearer</c>.
    /// </summary>
    [JsonPropertyName("token_type")]
    public required string TokenType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
