using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Output only. Additional details for the API Hub deployment.
/// </summary>
public record GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails2
{
    /// <summary>
    /// The gateway type for the API Hub deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gatewayType")]
    public GatewayType1? GatewayType { get; init; }

    /// <summary>
    /// The source project for the API Hub deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceProject")]
    public string? SourceProject { get; init; }

    /// <summary>
    /// The gateway for the API Hub deployment. Format: <c>projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gateway")]
    public string? Gateway { get; init; }

    /// <summary>
    /// The display name of the API Hub deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The resource uri for the API Hub deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceUri")]
    public string? ResourceUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
