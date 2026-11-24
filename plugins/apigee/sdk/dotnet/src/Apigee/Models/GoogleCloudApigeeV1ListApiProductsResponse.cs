using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1ListApiProductsResponse
{
    /// <summary>
    /// Lists all API product names defined for an organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProduct")]
    public IReadOnlyList<GoogleCloudApigeeV1ApiProduct>? ApiProduct { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
