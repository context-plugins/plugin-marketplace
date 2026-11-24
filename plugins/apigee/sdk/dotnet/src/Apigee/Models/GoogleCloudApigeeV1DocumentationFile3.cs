using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. The documentation file contents for the OpenAPI Specification. JSON and YAML file formats are supported.
/// </summary>
public record GoogleCloudApigeeV1DocumentationFile3
{
    /// <summary>
    /// Required. A display name for the file, shown in the management UI. Max length is 255 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Required. The file contents. The max size is 4 MB.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contents")]
    public string? Contents { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
