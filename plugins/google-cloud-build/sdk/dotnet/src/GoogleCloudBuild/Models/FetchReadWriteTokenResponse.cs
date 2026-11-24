using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Message for responding to get read/write token.
/// </summary>
public record FetchReadWriteTokenResponse
{
    /// <summary>
    /// The token content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("token")]
    public string? Token { get; init; }

    /// <summary>
    /// Expiration timestamp. Can be empty if unknown or non-expiring.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expirationTime")]
    public string? ExpirationTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
