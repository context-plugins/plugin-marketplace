using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

public record JobResponse
{
    /// <summary>
    /// Globally unique identifier of the resource, as a string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The base type of this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_type")]
    public string? ResourceType { get; init; }

    /// <summary>
    /// The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_subtype")]
    public string? ResourceSubtype { get; init; }

    /// <summary>
    /// The current status of this job. The value is one of: <c>not_started</c>, <c>in_progress</c>, <c>succeeded</c>, or <c>failed</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_project")]
    public ProjectCompact? NewProject { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_task")]
    public TaskCompact? NewTask { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_project_template")]
    public ProjectTemplateCompact? NewProjectTemplate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
