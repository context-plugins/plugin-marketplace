using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Represents a version of the API resource in API hub. This is also referred to as the API version.
/// </summary>
public record GoogleCloudApihubV1Version
{
    /// <summary>
    /// Output only. The specs associated with this version. Note that an API version can be associated with multiple specs. Format is <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specs")]
    public IReadOnlyList<string>? Specs { get; init; }

    /// <summary>
    /// Output only. The definitions contained in the API version. These definitions will be added to the version when a new spec is added or when an existing spec is updated. Format is <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/definitions/{definition}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("definitions")]
    public IReadOnlyList<string>? Definitions { get; init; }

    /// <summary>
    /// Optional. The selected deployment for a Version resource. This can be used when special handling is needed on client side for a particular deployment linked to the version. Format is <c>projects/{project}/locations/{location}/deployments/{deployment}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectedDeployment")]
    public string? SelectedDeployment { get; init; }

    /// <summary>
    /// Output only. The time at which the version was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Output only. The operations contained in the API version. These operations will be added to the version when a new spec is added or when an existing spec is updated. Format is <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiOperations")]
    public IReadOnlyList<string>? ApiOperations { get; init; }

    /// <summary>
    /// Output only. The time at which the version was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Optional. The deployments linked directly to this API version. Only directly-linked deployments are returned; deployments linked to this version's specs or operations are not included. Note: A particular API version could be deployed to multiple deployments (for dev deployment, UAT deployment, etc) Format is <c>projects/{project}/locations/{location}/deployments/{deployment}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployments")]
    public IReadOnlyList<string>? Deployments { get; init; }

    /// <summary>
    /// Required. The display name of the version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Optional. The lifecycle of the API version. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-lifecycle</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lifecycle")]
    public GoogleCloudApihubV1AttributeValues6? Lifecycle { get; init; }

    /// <summary>
    /// Optional. The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: <c>projects/{project}/locations/{location}/attributes/{attribute}</c>. The value is the attribute values associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1AttributeValues>? Attributes { get; init; }

    /// <summary>
    /// Optional. The description of the version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Identifier. The name of the version. Format: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. The list of sources and metadata from the sources of the version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceMetadata")]
    public IReadOnlyList<GoogleCloudApihubV1SourceMetadata>? SourceMetadata { get; init; }

    /// <summary>
    /// Optional. The documentation of the version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentation")]
    public GoogleCloudApihubV1Documentation2? Documentation { get; init; }

    /// <summary>
    /// Optional. The accreditations associated with the API version. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-accreditation</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accreditation")]
    public GoogleCloudApihubV1AttributeValues7? Accreditation { get; init; }

    /// <summary>
    /// Optional. The compliance associated with the API version. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-compliance</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compliance")]
    public GoogleCloudApihubV1AttributeValues8? Compliance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
