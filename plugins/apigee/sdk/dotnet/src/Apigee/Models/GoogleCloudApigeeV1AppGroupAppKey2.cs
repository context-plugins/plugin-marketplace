using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Note that only Scopes and Attributes of the AppGroupAppKey can be amended. Scopes and Attributes mentioned in the request will be inserted and the existing scopes and attributes will be removed.
/// </summary>
public record GoogleCloudApigeeV1AppGroupAppKey2
{
    /// <summary>
    /// Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of <c>-1</c>, the API key never expires. The expiration time can't be updated after it is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresInSeconds")]
    public string? ExpiresInSeconds { get; init; }

    /// <summary>
    /// Output only. Time the AppGroup app was created in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issuedAt")]
    public string? IssuedAt { get; init; }

    /// <summary>
    /// List of attributes associated with the credential.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    /// <summary>
    /// Status of the credential. Valid values include <c>approved</c> or <c>revoked</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Secret key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumerSecret")]
    public string? ConsumerSecret { get; init; }

    /// <summary>
    /// Output only. List of API products and its status for which the credential can be used. <b>Note</b>: Use UpdateAppGroupAppKeyApiProductRequest API to make the association after the consumer key and secret are created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProducts")]
    public IReadOnlyList<GoogleCloudApigeeV1ApiProductAssociation>? ApiProducts { get; init; }

    /// <summary>
    /// Immutable. Consumer key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumerKey")]
    public string? ConsumerKey { get; init; }

    /// <summary>
    /// Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    public IReadOnlyList<string>? Scopes { get; init; }

    /// <summary>
    /// Output only. Time the AppGroup app expires in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public string? ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
