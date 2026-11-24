using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// This represents ApiOperation resource in search results. Only name, description, spec and details fields are populated in search results.
/// </summary>
public record GoogleCloudApihubV1ApiOperation1
{
    /// <summary>
    /// Identifier. The name of the operation. Format: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. The name of the spec will be of the format: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}</c> Note:The name of the spec will be empty if the operation is created via CreateApiOperation API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spec")]
    public string? Spec { get; init; }

    /// <summary>
    /// Optional. The deployments linked directly to this API operation. For operations parsed from a spec, <c>UpdateApiOperation</c> returns <c>FAILED_PRECONDITION</c>; link the parent spec to the deployment via <c>Spec.deployments</c> instead. Format is <c>projects/{project}/locations/{location}/deployments/{deployment}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployments")]
    public IReadOnlyList<string>? Deployments { get; init; }

    /// <summary>
    /// Output only. The list of sources and metadata from the sources of the API operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceMetadata")]
    public IReadOnlyList<GoogleCloudApihubV1SourceMetadata>? SourceMetadata { get; init; }

    /// <summary>
    /// Output only. The time at which the operation was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. The time at which the operation was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Optional. The list of user defined attributes associated with the API operation resource. The key is the attribute name. It will be of the format: <c>projects/{project}/locations/{location}/attributes/{attribute}</c>. The value is the attribute values associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1AttributeValues>? Attributes { get; init; }

    /// <summary>
    /// Optional. Operation details. Note: Even though this field is optional, it is required for CreateApiOperation API and we will fail the request if not provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public GoogleCloudApihubV1OperationDetails2? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
