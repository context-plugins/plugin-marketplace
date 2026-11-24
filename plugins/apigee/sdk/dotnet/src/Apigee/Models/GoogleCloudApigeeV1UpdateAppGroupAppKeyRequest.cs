using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for UpdateAppGroupAppKey
/// </summary>
public record GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest
{
    /// <summary>
    /// Note that only Scopes and Attributes of the AppGroupAppKey can be amended. Scopes and Attributes mentioned in the request will be inserted and the existing scopes and attributes will be removed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appGroupAppKey")]
    public GoogleCloudApigeeV1AppGroupAppKey2? AppGroupAppKey { get; init; }

    /// <summary>
    /// Approve or revoke the consumer key by setting this value to <c>approve</c> or <c>revoke</c> respectively. The <c>Content-Type</c> header, if set, must be set to <c>application/octet-stream</c>, with empty body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    public string? Action { get; init; }

    /// <summary>
    /// The list of API products that will be associated with the credential. This list will be appended to the existing list of associated API Products for this App Key. Duplicates will be ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProducts")]
    public IReadOnlyList<string>? ApiProducts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
