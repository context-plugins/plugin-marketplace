using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The attribute values associated with resource.
/// </summary>
public record GoogleCloudApihubV1AttributeValues
{
    /// <summary>
    /// Output only. The name of the attribute. Format: projects/{project}/locations/{location}/attributes/{attribute}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attribute")]
    public string? Attribute { get; init; }

    /// <summary>
    /// The attribute values associated with a resource in case attribute data type is URL, URI or IP, like gs://bucket-name/object-name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uriValues")]
    public GoogleCloudApihubV1StringAttributeValues4? UriValues { get; init; }

    /// <summary>
    /// The attribute values associated with a resource in case attribute data type is string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stringValues")]
    public GoogleCloudApihubV1StringAttributeValues1? StringValues { get; init; }

    /// <summary>
    /// The attribute values associated with a resource in case attribute data type is enum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enumValues")]
    public GoogleCloudApihubV1EnumAttributeValues2? EnumValues { get; init; }

    /// <summary>
    /// The attribute values associated with a resource in case attribute data type is JSON.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jsonValues")]
    public GoogleCloudApihubV1StringAttributeValues2? JsonValues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
