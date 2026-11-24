using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Core.Validation.Attributes;

namespace Hud.Models;

/// <summary>
/// Runs of a job done outside HUD, imported into the taskset holding their tasks.
/// <para>
/// The job is created by the first call for its <c>external_id</c> in the taskset;
/// later calls add traces and leave its fields as they are.
/// </para>
/// </summary>
public record JobImportRequest
{
    [JsonPropertyName("taskset_id")]
    public required Guid TasksetId { get; init; }

    /// <summary>
    /// Identity of the job in the system that ran it, as <c>&lt;system&gt;:&lt;id&gt;</c>
    /// </summary>
    [JsonPropertyName("external_id")]
    [MaxLength(255)]
    public required string ExternalId { get; init; }

    [JsonPropertyName("name")]
    [StringLength(255, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Runs per task
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_size")]
    [Minimum(1)]
    public int? GroupSize { get; init; } = 1;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonPropertyName("traces")]
    [MinLength(1)]
    [MaxLength(1000)]
    public required IReadOnlyList<JobImportTrace> Traces { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
