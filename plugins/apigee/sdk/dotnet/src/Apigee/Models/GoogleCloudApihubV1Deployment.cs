using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Details of the deployment where APIs are hosted. A deployment could represent an Apigee proxy, API gateway, other Google Cloud services or non-Google Cloud services as well. A deployment entity is a root level entity in the API hub and exists independent of any API.
/// </summary>
public record GoogleCloudApihubV1Deployment
{
    /// <summary>
    /// Optional. The uri where users can navigate to for the management of the deployment. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-management-url</c> The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. The value of the attribute should be a valid URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("managementUrl")]
    public GoogleCloudApihubV1AttributeValues1? ManagementUrl { get; init; }

    /// <summary>
    /// Required. The display name of the deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Optional. The description of the deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Output only. The list of sources and metadata from the sources of the deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceMetadata")]
    public IReadOnlyList<GoogleCloudApihubV1SourceMetadata>? SourceMetadata { get; init; }

    /// <summary>
    /// Output only. The time at which the deployment was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. The time at which the deployment was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Required. The type of deployment. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-deployment-type</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentType")]
    public GoogleCloudApihubV1AttributeValues2? DeploymentType { get; init; }

    /// <summary>
    /// Optional. A revision identifier for the underlying gateway configuration that this deployment serves. For Apigee gateway variants, this is typically the proxy revision number populated automatically when the deployment is discovered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceRevision")]
    public string? SourceRevision { get; init; }

    /// <summary>
    /// Output only. The specs linked directly to this deployment. Note: a deployment could serve multiple specs (e.g., across different revisions of the same underlying gateway configuration).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specs")]
    public IReadOnlyList<string>? Specs { get; init; }

    /// <summary>
    /// Optional. The documentation of the deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentation")]
    public GoogleCloudApihubV1Documentation1? Documentation { get; init; }

    /// <summary>
    /// Required. The resource URI identifies the deployment within its gateway. For Apigee gateways, its recommended to use the format: organizations/{org}/environments/{env}/apis/{api}. For ex: if a proxy with name <c>orders</c> is deployed in <c>staging</c> environment of <c>cymbal</c> organization, the resource URI would be: <c>organizations/cymbal/environments/staging/apis/orders</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceUri")]
    public string? ResourceUri { get; init; }

    /// <summary>
    /// Output only. The API versions linked to this deployment. Note: A particular deployment could be linked to multiple different API versions (of same or different APIs).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiVersions")]
    public IReadOnlyList<string>? ApiVersions { get; init; }

    /// <summary>
    /// Identifier. The name of the deployment. Format: <c>projects/{project}/locations/{location}/deployments/{deployment}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. The uri where additional source specific information for this deployment can be found. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-source-uri</c> The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. The value of the attribute should be a valid URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object, not a directory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceUri")]
    public GoogleCloudApihubV1AttributeValues3? SourceUri { get; init; }

    /// <summary>
    /// Optional. The project to which the deployment belongs. For Google Cloud gateways, this will refer to the project identifier. For others like Edge/OPDK, this will refer to the org identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceProject")]
    public string? SourceProject { get; init; }

    /// <summary>
    /// Optional. The SLO for this deployment. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-slo</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slo")]
    public GoogleCloudApihubV1AttributeValues4? Slo { get; init; }

    /// <summary>
    /// Required. The endpoints at which this deployment resource is listening for API requests. This could be a list of complete URIs, hostnames or an IP addresses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoints")]
    public IReadOnlyList<string>? Endpoints { get; init; }

    /// <summary>
    /// Optional. The environment mapping to this deployment. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-environment</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public GoogleCloudApihubV1AttributeValues5? Environment { get; init; }

    /// <summary>
    /// Optional. The environment at source for the deployment. For example: prod, dev, staging, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceEnvironment")]
    public string? SourceEnvironment { get; init; }

    /// <summary>
    /// Output only. The API operations linked directly to this deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiOperations")]
    public IReadOnlyList<string>? ApiOperations { get; init; }

    /// <summary>
    /// Optional. The list of user defined attributes associated with the deployment resource. The key is the attribute name. It will be of the format: <c>projects/{project}/locations/{location}/attributes/{attribute}</c>. The value is the attribute values associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1AttributeValues>? Attributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
