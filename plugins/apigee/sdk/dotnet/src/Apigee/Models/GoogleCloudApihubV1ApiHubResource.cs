using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// ApiHubResource is one of the resources such as Api, Operation, Deployment, Definition, Spec and Version resources stored in API-Hub.
/// </summary>
public record GoogleCloudApihubV1ApiHubResource
{
    /// <summary>
    /// This represents Deployment resource in search results. Only name, display_name, description, deployment_type and api_versions fields are populated in search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployment")]
    public GoogleCloudApihubV1Deployment1? Deployment { get; init; }

    /// <summary>
    /// This represents Version resource in search results. Only name, display_name, description, lifecycle, compliance and accreditation fields are populated in search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public GoogleCloudApihubV1Version5? Version { get; init; }

    /// <summary>
    /// This represents ApiOperation resource in search results. Only name, description, spec and details fields are populated in search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation")]
    public GoogleCloudApihubV1ApiOperation1? Operation { get; init; }

    /// <summary>
    /// This represents Definition resource in search results. Only name field is populated in search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("definition")]
    public GoogleCloudApihubV1Definition2? Definition { get; init; }

    /// <summary>
    /// This represents Api resource in search results. Only name, display_name, description and owner fields are populated in search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api")]
    public GoogleCloudApihubV1Api5? Api { get; init; }

    /// <summary>
    /// This represents Spec resource in search results. Only name, display_name, description, spec_type and documentation fields are populated in search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spec")]
    public GoogleCloudApihubV1Spec3? Spec { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
