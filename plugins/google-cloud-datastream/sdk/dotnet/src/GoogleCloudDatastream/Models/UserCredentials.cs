using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Deprecated: Salesforce is retiring Username-Password authentication. Use <c>Oauth2ClientCredentials</c> instead.
/// </summary>
public record UserCredentials
{
    /// <summary>
    /// Required. Username for the Salesforce connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    /// <summary>
    /// Optional. Password for the Salesforce connection. Mutually exclusive with the <c>secret_manager_stored_password</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public string? Password { get; init; }

    /// <summary>
    /// Optional. A reference to a Secret Manager resource name storing the Salesforce connection's password. Mutually exclusive with the <c>password</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretManagerStoredPassword")]
    public string? SecretManagerStoredPassword { get; init; }

    /// <summary>
    /// Optional. A reference to a Secret Manager resource name storing the Salesforce connection's security token. Mutually exclusive with the <c>security_token</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretManagerStoredSecurityToken")]
    public string? SecretManagerStoredSecurityToken { get; init; }

    /// <summary>
    /// Optional. Security token for the Salesforce connection. Mutually exclusive with the <c>secret_manager_stored_security_token</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityToken")]
    public string? SecurityToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
