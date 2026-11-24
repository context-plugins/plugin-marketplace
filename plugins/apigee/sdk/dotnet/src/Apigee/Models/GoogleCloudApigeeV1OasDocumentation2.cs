using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Optional. OpenAPI Specification documentation.
/// </summary>
public record GoogleCloudApigeeV1OasDocumentation2
{
    /// <summary>
    /// Required. The documentation file contents for the OpenAPI Specification. JSON and YAML file formats are supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spec")]
    public GoogleCloudApigeeV1DocumentationFile3? Spec { get; init; }

    /// <summary>
    /// Output only. The format of the input specification file contents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public Format? Format { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
