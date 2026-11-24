using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// OpenApiSpecDetails contains the details parsed from an OpenAPI spec in addition to the fields mentioned in SpecDetails.
/// </summary>
public record GoogleCloudApihubV1OpenApiSpecDetails
{
    /// <summary>
    /// Output only. Owner details for the spec. This maps to <c>info.contact</c> in OpenAPI spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public GoogleCloudApihubV1Owner1? Owner { get; init; }

    /// <summary>
    /// Output only. The version in the spec. This maps to <c>info.version</c> in OpenAPI spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// Output only. The format of the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public FormatApigeeProjectsApi? Format { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
