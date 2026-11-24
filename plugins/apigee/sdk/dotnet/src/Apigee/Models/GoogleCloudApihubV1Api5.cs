using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// This represents Api resource in search results. Only name, display_name, description and owner fields are populated in search results.
/// </summary>
public record GoogleCloudApihubV1Api5
{
    /// <summary>
    /// Optional. The documentation for the API resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentation")]
    public GoogleCloudApihubV1Documentation3? Documentation { get; init; }

    /// <summary>
    /// Optional. The target users for the API. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-target-user</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetUser")]
    public GoogleCloudApihubV1AttributeValues9? TargetUser { get; init; }

    /// <summary>
    /// Optional. The api functional requirements associated with the API resource. Cardinality is 1 for this attribute. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-api-functional-requirements</c> attribute. The value of the attribute should be a proper URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object, not a directory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiFunctionalRequirements")]
    public GoogleCloudApihubV1AttributeValues10? ApiFunctionalRequirements { get; init; }

    /// <summary>
    /// Optional. Owner details for the API resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public GoogleCloudApihubV1Owner3? Owner { get; init; }

    /// <summary>
    /// Output only. The time at which the API resource was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Identifier. The name of the API resource in the API Hub. Format: <c>projects/{project}/locations/{location}/apis/{api}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. The time at which the API resource was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Optional. The team owning the API. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-team</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team")]
    public GoogleCloudApihubV1AttributeValues11? Team { get; init; }

    /// <summary>
    /// Optional. The api technical requirements associated with the API resource. Cardinality is 1 for this attribute. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-api-technical-requirements</c> attribute. The value of the attribute should be a proper URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object, not a directory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiTechnicalRequirements")]
    public GoogleCloudApihubV1AttributeValues12? ApiTechnicalRequirements { get; init; }

    /// <summary>
    /// Optional. The selected version for an API resource. This can be used when special handling is needed on client side for particular version of the API. Format is <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectedVersion")]
    public string? SelectedVersion { get; init; }

    /// <summary>
    /// Optional. The type of the service. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-service-type</c> attribute. The cardinality of this attribute is 1. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceType")]
    public GoogleCloudApihubV1AttributeValues13? ServiceType { get; init; }

    /// <summary>
    /// Optional. The list of user defined attributes associated with the API resource. The key is the attribute name. It will be of the format: <c>projects/{project}/locations/{location}/attributes/{attribute}</c>. The value is the attribute values associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1AttributeValues>? Attributes { get; init; }

    /// <summary>
    /// Output only. The list of versions present in an API resource. Note: An API resource can be associated with more than 1 version. Format is <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versions")]
    public IReadOnlyList<string>? Versions { get; init; }

    /// <summary>
    /// Required. The display name of the API resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Optional. The maturity level of the API. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-maturity-level</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maturityLevel")]
    public GoogleCloudApihubV1AttributeValues14? MaturityLevel { get; init; }

    /// <summary>
    /// Optional. Fingerprint of the API resource. This must be unique for each API resource. It can neither be unset nor be updated to an existing fingerprint of another API resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fingerprint")]
    public string? Fingerprint { get; init; }

    /// <summary>
    /// Optional. The style of the API. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-api-style</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiStyle")]
    public GoogleCloudApihubV1AttributeValues15? ApiStyle { get; init; }

    /// <summary>
    /// Optional. The business unit owning the API. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-business-unit</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessUnit")]
    public GoogleCloudApihubV1AttributeValues16? BusinessUnit { get; init; }

    /// <summary>
    /// Optional. The api requirement doc associated with the API resource. Cardinality is 1 for this attribute. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-api-requirements</c> attribute. The value of the attribute should be a proper URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object, not a directory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiRequirements")]
    public GoogleCloudApihubV1AttributeValues17? ApiRequirements { get; init; }

    /// <summary>
    /// Optional. The description of the API resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Output only. The list of sources and metadata from the sources of the API resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceMetadata")]
    public IReadOnlyList<GoogleCloudApihubV1SourceMetadata>? SourceMetadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
