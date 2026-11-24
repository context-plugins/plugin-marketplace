using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The assessed resource.
/// </summary>
public record GoogleCloudApigeeV1SecurityAssessmentResultResource2
{
    /// <summary>
    /// Optional.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiHubGatewayType")]
    public ApiHubGatewayType? ApiHubGatewayType { get; init; }

    /// <summary>
    /// Output only. Additional details for the API Hub deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiHubDeploymentDetails")]
    public GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails2? ApiHubDeploymentDetails { get; init; }

    /// <summary>
    /// Required. Type of this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; }

    /// <summary>
    /// Required. Name of this resource. For an Apigee API Proxy, this should be the id of the API proxy. For an API Hub Deployment, this should be the id of the deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The revision id for the resource. In case of Apigee, this is proxy revision id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceRevisionId")]
    public string? ResourceRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
