using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record TokenRequest
{
    /// <summary>
    /// The OAuth 2.0 grant type. Must be client_credentials.
    /// </summary>
    [JsonPropertyName("grant_type")]
    public string GrantType { get; } = "client_credentials";

    /// <summary>
    /// The client ID provided by Instacart.
    /// </summary>
    [JsonPropertyName("client_id")]
    public required string ClientId { get; init; }

    /// <summary>
    /// The client secret provided by Instacart.
    /// </summary>
    [JsonPropertyName("client_secret")]
    public required string ClientSecret { get; init; }

    /// <summary>
    /// The API scope to request access for, such as connect:fulfillment.
    /// </summary>
    [JsonPropertyName("scope")]
    public required string Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
