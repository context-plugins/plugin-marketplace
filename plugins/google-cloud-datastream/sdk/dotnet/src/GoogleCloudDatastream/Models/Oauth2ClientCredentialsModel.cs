using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// OAuth2 Client Credentials.
/// </summary>
public record Oauth2ClientCredentialsModel
{
    /// <summary>
    /// Optional. A reference to a Secret Manager resource name storing the Salesforce OAuth2 client_secret. Mutually exclusive with the <c>client_secret</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretManagerStoredClientSecret")]
    public string? SecretManagerStoredClientSecret { get; init; }

    /// <summary>
    /// Optional. Client secret for Salesforce OAuth2 Client Credentials. Mutually exclusive with the <c>secret_manager_stored_client_secret</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientSecret")]
    public string? ClientSecret { get; init; }

    /// <summary>
    /// Required. Client ID for Salesforce OAuth2 Client Credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientId")]
    public string? ClientId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
