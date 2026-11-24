using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1DeveloperApp
{
    /// <summary>
    /// Output only. Time the developer app was modified in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedAt")]
    public string? LastModifiedAt { get; init; }

    /// <summary>
    /// Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    public IReadOnlyList<string>? Scopes { get; init; }

    /// <summary>
    /// Output only. Time the developer app was created in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of <c>-1</c>, the API key never expires. The expiration time can't be updated after it is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyExpiresIn")]
    public string? KeyExpiresIn { get; init; }

    /// <summary>
    /// ID of the developer app. This ID is not user specified but is automatically generated on app creation. appId is a UUID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appId")]
    public string? AppId { get; init; }

    /// <summary>
    /// List of attributes for the developer app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    /// <summary>
    /// Developer app family.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appFamily")]
    public string? AppFamily { get; init; }

    /// <summary>
    /// Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callbackUrl")]
    public string? CallbackUrl { get; init; }

    /// <summary>
    /// Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credentials")]
    public IReadOnlyList<GoogleCloudApigeeV1Credential>? Credentials { get; init; }

    /// <summary>
    /// ID of the developer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("developerId")]
    public string? DeveloperId { get; init; }

    /// <summary>
    /// Name of the developer app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// List of API products associated with the developer app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProducts")]
    public IReadOnlyList<string>? ApiProducts { get; init; }

    /// <summary>
    /// Status of the credential. Valid values include <c>approved</c> or <c>revoked</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
