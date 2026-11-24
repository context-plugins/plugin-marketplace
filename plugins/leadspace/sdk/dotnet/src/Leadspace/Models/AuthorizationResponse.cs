using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record AuthorizationResponse
{
    /// <summary>
    /// The generated token to use in API v4 enrichment requests
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("token")]
    public string? Token { get; init; }

    /// <summary>
    /// Value to use in refresh token requests
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refreshToken")]
    public string? RefreshToken { get; init; }

    /// <summary>
    /// Epoch seconds of the expiration moment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration")]
    public int? Expiration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
