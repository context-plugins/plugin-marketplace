using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Represents a spec associated with an API version in the API Hub. Note that specs of various types can be uploaded, however parsing of details is supported for OpenAPI spec currently.
/// </summary>
public record GoogleCloudApihubV1Spec
{
    /// <summary>
    /// Optional. The lint response for the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lintResponse")]
    public GoogleCloudApihubV1LintResponse2? LintResponse { get; init; }

    /// <summary>
    /// Optional. The deployments linked directly to this spec. Format is <c>projects/{project}/locations/{location}/deployments/{deployment}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployments")]
    public IReadOnlyList<string>? Deployments { get; init; }

    /// <summary>
    /// Identifier. The name of the spec. Format: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. The list of user defined attributes associated with the spec. The key is the attribute name. It will be of the format: <c>projects/{project}/locations/{location}/attributes/{attribute}</c>. The value is the attribute values associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1AttributeValues>? Attributes { get; init; }

    /// <summary>
    /// Output only. The list of sources and metadata from the sources of the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceMetadata")]
    public IReadOnlyList<GoogleCloudApihubV1SourceMetadata>? SourceMetadata { get; init; }

    /// <summary>
    /// Optional. Input only. The contents of the uploaded spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contents")]
    public GoogleCloudApihubV1SpecContents4? Contents { get; init; }

    /// <summary>
    /// Optional. The URI of the spec source in case file is uploaded from an external version control system.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceUri")]
    public string? SourceUri { get; init; }

    /// <summary>
    /// Output only. The additional spec contents for the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalSpecContents")]
    public IReadOnlyList<GoogleCloudApihubV1AdditionalSpecContent>? AdditionalSpecContents { get; init; }

    /// <summary>
    /// Output only. The time at which the spec was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. The time at which the spec was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Required. The display name of the spec. This can contain the file name of the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Required. The type of spec. The value should be one of the allowed values defined for <c>projects/{project}/locations/{location}/attributes/system-spec-type</c> attribute. The number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. Note, this field is mandatory if content is provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specType")]
    public GoogleCloudApihubV1AttributeValues18? SpecType { get; init; }

    /// <summary>
    /// Output only. Details parsed from the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public GoogleCloudApihubV1SpecDetails2? Details { get; init; }

    /// <summary>
    /// Optional. Input only. Enum specifying the parsing mode for OpenAPI Specification (OAS) parsing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parsingMode")]
    public ParsingMode? ParsingMode { get; init; }

    /// <summary>
    /// Optional. The documentation of the spec. For OpenAPI spec, this will be populated from <c>externalDocs</c> in OpenAPI spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentation")]
    public GoogleCloudApihubV1Documentation4? Documentation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
