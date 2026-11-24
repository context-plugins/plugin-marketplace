using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

/// <summary>
/// The starting state, if anything is already known
/// </summary>
public record State
{
    /// <summary>
    /// Where the work stands now, in a few sentences. Replaces the previous one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentState")]
    [MaxLength(2000)]
    public string? CurrentState { get; init; }

    /// <summary>
    /// The full list of open questions, replacing the current one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openQuestions")]
    [MaxLength(20)]
    public IReadOnlyList<string>? OpenQuestions { get; init; }

    /// <summary>
    /// Questions to add to the list without restating it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addOpenQuestions")]
    [MaxLength(20)]
    public IReadOnlyList<string>? AddOpenQuestions { get; init; }

    /// <summary>
    /// Questions that are now answered, to take off the list
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolveOpenQuestions")]
    [MaxLength(20)]
    public IReadOnlyList<string>? ResolveOpenQuestions { get; init; }

    /// <summary>
    /// What the work must respect, replacing the current list
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("constraints")]
    [MaxLength(20)]
    public IReadOnlyList<string>? Constraints { get; init; }

    /// <summary>
    /// What is in the way right now, replacing the current list; empty when nothing is
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockedBy")]
    [MaxLength(10)]
    public IReadOnlyList<string>? BlockedBy { get; init; }

    /// <summary>
    /// The single next step
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextAction")]
    [MaxLength(500)]
    public string? NextAction { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
