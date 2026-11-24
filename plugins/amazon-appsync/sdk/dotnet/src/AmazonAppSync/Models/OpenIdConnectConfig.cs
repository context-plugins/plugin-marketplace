using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record OpenIdConnectConfig
{
    /// <summary>
    /// The issuer for the OIDC configuration. The issuer returned by discovery must exactly match the value of iss in the ID token.
    /// </summary>
    [JsonPropertyName("issuer")]
    public required string Issuer { get; init; }

    /// <summary>
    /// The client identifier of the relying party at the OpenID identity provider. This identifier is typically obtained when the relying party is registered with the OpenID identity provider. You can specify a regular expression so that AppSync can validate against multiple client identifiers at a time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientId")]
    public string? ClientId { get; init; }

    /// <summary>
    /// The number of milliseconds that a token is valid after it's issued to a user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iatTTL")]
    public int? IatTtl { get; init; }

    /// <summary>
    /// The number of milliseconds that a token is valid after being authenticated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authTTL")]
    public int? AuthTtl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
