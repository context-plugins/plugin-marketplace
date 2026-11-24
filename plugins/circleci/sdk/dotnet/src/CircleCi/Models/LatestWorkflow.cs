using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

/// <summary>
/// The latest workflow this job is part of
/// </summary>
public record LatestWorkflow
{
    /// <summary>
    /// The workflow ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// The workflow name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
