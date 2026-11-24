using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

/// <summary>
/// The run the results came from: { tool, runId?, name?, url?, release? }
/// </summary>
public record Run
{
    /// <summary>
    /// The tool that produced the results: promptfoo, inspect, garak, weave, …
    /// </summary>
    [JsonPropertyName("tool")]
    [StringLength(60, MinimumLength = 1)]
    public required string Tool { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runId")]
    [MaxLength(200)]
    public string? RunId { get; init; }

    /// <summary>
    /// The run, task, experiment or evaluation name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(200)]
    public string? Name { get; init; }

    /// <summary>
    /// The run in the tool, for a reviewer to open
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [MaxLength(2000)]
    public string? Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startedAt")]
    [MaxLength(40)]
    public string? StartedAt { get; init; }

    /// <summary>
    /// The release the run tested — any of provider, model, modelVersion, promptHash, guardrailsHash. Evidence naming a release other than the one the AI system now runs does not count towards a control
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("release")]
    public Release? Release { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
