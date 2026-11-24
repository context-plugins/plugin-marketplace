using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record TokenRequest
{
    [JsonPropertyName("code")]
    [MinLength(1)]
    public required string Code { get; init; }

    /// <summary>
    /// OAuth API key that is a public identifier for app
    /// </summary>
    [JsonPropertyName("client_id")]
    [MinLength(1)]
    public required string ClientId { get; init; }

    /// <summary>
    /// OAuth client secret that is a private secret known only to app and authorization server
    /// </summary>
    [JsonPropertyName("client_secret")]
    [MinLength(1)]
    public required string ClientSecret { get; init; }

    /// <summary>
    /// Authorization server will redirect the user back to the application via redirect url
    /// </summary>
    [JsonPropertyName("redirect_uri")]
    [MinLength(1)]
    public required string RedirectUri { get; init; }

    /// <summary>
    /// Type of grant used to get an access token
    /// </summary>
    [JsonPropertyName("grant_type")]
    [MinLength(1)]
    public required string GrantType { get; init; }

    /// <summary>
    /// Whether to refresh (regenerate) the extended access token. Defaults to false when absent. Set to true to refresh; false or omit to reuse an existing extended token when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refresh_extended_token")]
    public bool? RefreshExtendedToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
