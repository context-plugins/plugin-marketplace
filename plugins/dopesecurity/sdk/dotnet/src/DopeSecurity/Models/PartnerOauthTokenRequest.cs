using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record PartnerOauthTokenRequest
{
    /// <summary>
    /// The type of grant requested. You must set this to <c>client_credentials</c>
    /// </summary>
    [JsonPropertyName("grant_type")]
    public string GrantType { get; } = "client_credentials";

    /// <summary>
    /// Your application's Client ID.
    /// </summary>
    [JsonPropertyName("client_id")]
    public required string ClientId { get; init; }

    /// <summary>
    /// Your application's Client Secret.
    /// </summary>
    [JsonPropertyName("client_secret")]
    public required string ClientSecret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
