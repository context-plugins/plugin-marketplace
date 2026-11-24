using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Resource for which we are computing security assessment.
/// </summary>
public record GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResource
{
    /// <summary>
    /// Required. Name of this resource. For an Apigee API Proxy, this should be the id of the API proxy. For an API Hub Deployment, this should be the id of the deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. Type of this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
