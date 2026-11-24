using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for [GetAppGroupApp].[AppGroupApps.GetAppGroupApp], [CreateAppGroupAppRequest].[AppGroupApp.CreateAppGroupAppRequest] and [DeleteAppGroupApp].[AppGroupApp.DeleteAppGroupApp]
/// </summary>
public record GoogleCloudApigeeV1AppGroupApp
{
    /// <summary>
    /// Status of the App. Valid values include <c>approved</c> or <c>revoked</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// List of attributes for the AppGroup app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    /// <summary>
    /// Immutable. Name of the AppGroup app whose resource name format is of syntax (organizations/*/appgroups/*/apps/*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Immutable. Expiration time, in seconds, for the consumer key that is generated for the AppGroup app. If not set or left to the default value of <c>-1</c>, the API key never expires. The expiration time can't be updated after it is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyExpiresIn")]
    public string? KeyExpiresIn { get; init; }

    /// <summary>
    /// Output only. Set of credentials for the AppGroup app consisting of the consumer key/secret pairs associated with the API products.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credentials")]
    public IReadOnlyList<GoogleCloudApigeeV1Credential>? Credentials { get; init; }

    /// <summary>
    /// List of API products associated with the AppGroup app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProducts")]
    public IReadOnlyList<string>? ApiProducts { get; init; }

    /// <summary>
    /// Output only. Time the AppGroup app was created in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// Scopes to apply to the AppGroup app. The specified scopes must already exist for the API product that you associate with the AppGroup app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    public IReadOnlyList<string>? Scopes { get; init; }

    /// <summary>
    /// Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to AppGroup apps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callbackUrl")]
    public string? CallbackUrl { get; init; }

    /// <summary>
    /// Immutable. Name of the parent AppGroup whose resource name format is of syntax (organizations/*/appgroups/*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appGroup")]
    public string? AppGroup { get; init; }

    /// <summary>
    /// Output only. Time the AppGroup app was modified in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedAt")]
    public string? LastModifiedAt { get; init; }

    /// <summary>
    /// Immutable. ID of the AppGroup app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appId")]
    public string? AppId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
