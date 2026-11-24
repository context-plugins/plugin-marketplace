using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1ListHybridIssuersResponse
{
    /// <summary>
    /// Lists of hybrid services and its trusted issuer email ids.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issuers")]
    public IReadOnlyList<GoogleCloudApigeeV1ServiceIssuersMapping>? Issuers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
