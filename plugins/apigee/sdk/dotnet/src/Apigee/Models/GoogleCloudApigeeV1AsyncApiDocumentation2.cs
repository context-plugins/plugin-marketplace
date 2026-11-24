using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. AsyncAPI Specification documentation.
/// </summary>
public record GoogleCloudApigeeV1AsyncApiDocumentation2
{
    /// <summary>
    /// Required. The documentation file contents for the AsyncAPI Specification. JSON and YAML file formats are supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spec")]
    public GoogleCloudApigeeV1DocumentationFile2? Spec { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
