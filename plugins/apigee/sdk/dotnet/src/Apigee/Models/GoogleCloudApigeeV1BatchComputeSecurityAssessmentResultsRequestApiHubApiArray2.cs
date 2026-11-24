using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// An array of API Hub APIs to assess. A maximum of 1 API can be assessed.
/// </summary>
public record GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2
{
    /// <summary>
    /// Required. The array of API Hub API IDs. Format: <c>projects/{project}/locations/{location}/apis/{api}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apis")]
    public IReadOnlyList<string>? Apis { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
