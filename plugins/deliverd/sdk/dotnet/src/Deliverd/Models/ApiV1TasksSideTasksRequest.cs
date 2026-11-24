using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1TasksSideTasksRequest
{
    /// <summary>
    /// What the side task is, as it will appear under the objective
    /// </summary>
    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// What exactly it has to solve. Narrow is better: it is done when this is answered
    /// </summary>
    [JsonPropertyName("goal")]
    [StringLength(4000, MinimumLength = 1)]
    public required string Goal { get; init; }

    /// <summary>
    /// side_task, investigation, research, debug or decision; side_task when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind6? Kind { get; init; }

    /// <summary>
    /// The context it needs, replacing what Deliverd would select from the parent. Facts, not the transcript
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relevantContext")]
    [MaxLength(20)]
    public IReadOnlyList<string>? RelevantContext { get; init; }

    /// <summary>
    /// What it must respect; the parent's constraints when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("knownConstraints")]
    [MaxLength(20)]
    public IReadOnlyList<string>? KnownConstraints { get; init; }

    /// <summary>
    /// One of the parent's open questions this is meant to answer; it comes off the list when the result is applied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolvesQuestion")]
    [StringLength(500, MinimumLength = 1)]
    public string? ResolvesQuestion { get; init; }

    /// <summary>
    /// suggested when you proposed moving this into a side task and the person agreed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("origin")]
    public Origin6? Origin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionUrl")]
    [MaxLength(2000)]
    [Format(FormatKind.Uri)]
    public string? SessionUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
