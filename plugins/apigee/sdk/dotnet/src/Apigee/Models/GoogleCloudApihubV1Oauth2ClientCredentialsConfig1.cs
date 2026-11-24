using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Oauth2.0 Client Credentials.
/// </summary>
public record GoogleCloudApihubV1Oauth2ClientCredentialsConfig1
{
    /// <summary>
    /// Required. The client identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientId")]
    public string? ClientId { get; init; }

    /// <summary>
    /// Required. Secret version reference containing the client secret. The <c>secretmanager.versions.access</c> permission should be granted to the service account accessing the secret.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientSecret")]
    public GoogleCloudApihubV1Secret1? ClientSecret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
