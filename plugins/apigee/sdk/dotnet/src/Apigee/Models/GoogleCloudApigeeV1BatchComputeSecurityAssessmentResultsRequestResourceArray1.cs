using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Include only these resources.
/// </summary>
public record GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1
{
    /// <summary>
    /// Required. The array of resources. For Apigee, the proxies are resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resources")]
    public IReadOnlyList<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResource>? Resources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
