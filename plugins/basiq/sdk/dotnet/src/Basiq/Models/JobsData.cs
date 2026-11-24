using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Container object, containing job details.
/// </summary>
public record JobsData
{
    /// <summary>
    /// Value is "job".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// A string that uniquely identifies the job.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The date time when the job was created.
    /// </summary>
    [JsonPropertyName("created")]
    public required string Created { get; init; }

    /// <summary>
    /// The date time when the job was last updated.
    /// </summary>
    [JsonPropertyName("updated")]
    public required string Updated { get; init; }

    /// <summary>
    /// Institution details.
    /// </summary>
    [JsonPropertyName("institution")]
    public required InstitutionConnectJobsApi Institution { get; init; }

    /// <summary>
    /// List of steps that need to be completed.
    /// </summary>
    [JsonPropertyName("steps")]
    public required IReadOnlyList<JobsStep> Steps { get; init; }

    /// <summary>
    /// Links to the resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public JobsLinks? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
