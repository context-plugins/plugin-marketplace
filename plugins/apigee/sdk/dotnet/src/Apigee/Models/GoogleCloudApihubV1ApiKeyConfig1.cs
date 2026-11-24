using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Api Key Config.
/// </summary>
public record GoogleCloudApihubV1ApiKeyConfig1
{
    /// <summary>
    /// Required. The location of the API key. The default value is QUERY.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpElementLocation")]
    public HttpElementLocation? HttpElementLocation { get; init; }

    /// <summary>
    /// Required. The name of the SecretManager secret version resource storing the API key. Format: <c>projects/{project}/secrets/{secrete}/versions/{version}</c>. The <c>secretmanager.versions.access</c> permission should be granted to the service account accessing the secret.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiKey")]
    public GoogleCloudApihubV1Secret2? ApiKey { get; init; }

    /// <summary>
    /// Required. The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
