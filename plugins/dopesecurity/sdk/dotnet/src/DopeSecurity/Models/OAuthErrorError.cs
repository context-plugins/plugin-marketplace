using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// The error response related OAuth tokens
/// </summary>
public record OAuthErrorError
{
    /// <summary>
    /// Specifies the OAuth error code string when the request for a token fails.
    /// </summary>
    [JsonPropertyName("error")]
    public required string Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
