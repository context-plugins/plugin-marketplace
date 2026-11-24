using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Runtime project attachment for a project if exists, empty otherwise.
/// </summary>
public record GoogleCloudApihubV1RuntimeProjectAttachment1
{
    /// <summary>
    /// Output only. Create time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Identifier. The resource name of a runtime project attachment. Format: "projects/{project}/locations/{location}/runtimeProjectAttachments/{runtime_project_attachment}".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. Immutable. Google cloud project name in the format: "projects/abc" or "projects/123". As input, project name with either project id or number are accepted. As output, this field will contain project number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeProject")]
    public string? RuntimeProject { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
