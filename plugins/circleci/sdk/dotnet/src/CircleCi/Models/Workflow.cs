using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Models.Enums;

namespace CircleCi.Models;

public record Workflow
{
    /// <summary>
    /// The ID of the pipeline this workflow belongs to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pipeline_id")]
    public Guid? PipelineId { get; init; }

    /// <summary>
    /// The unique identifier of the workflow
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// The name of the workflow
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The project slug
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_slug")]
    public string? ProjectSlug { get; init; }

    /// <summary>
    /// The current status of the workflow
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusCircleCiRestApiV2PipelineApi? Status { get; init; }

    /// <summary>
    /// The ID of the user who started the workflow
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_by")]
    public Guid? StartedBy { get; init; }

    /// <summary>
    /// The pipeline number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pipeline_number")]
    public int? PipelineNumber { get; init; }

    /// <summary>
    /// When the workflow was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// When the workflow stopped
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stopped_at")]
    public DateTimeOffset? StoppedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
