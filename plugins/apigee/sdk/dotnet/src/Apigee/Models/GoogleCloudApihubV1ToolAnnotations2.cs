using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. Optional annotations for the tool.
/// </summary>
public record GoogleCloudApihubV1ToolAnnotations2
{
    /// <summary>
    /// Optional. Hint indicating if the tool interacts with the open world (e.g., internet).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openWorldHint")]
    public bool? OpenWorldHint { get; init; }

    /// <summary>
    /// Optional. A human-readable title for the tool (if different from Tool.title).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Optional. Hint indicating if the tool is idempotent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotentHint")]
    public bool? IdempotentHint { get; init; }

    /// <summary>
    /// Optional. Hint indicating if the tool is read-only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("readOnlyHint")]
    public bool? ReadOnlyHint { get; init; }

    /// <summary>
    /// Optional. Hint indicating if the tool may have destructive side effects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destructiveHint")]
    public bool? DestructiveHint { get; init; }

    /// <summary>
    /// Optional. Additional hints which may help tools and not covered in defaults.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalHints")]
    public IReadOnlyDictionary<string, string>? AdditionalHints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
