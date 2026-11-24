using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// AsyncAPI Specification documentation for a catalog item.
/// </summary>
public record GoogleCloudApigeeV1AsyncApiDocumentation
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
