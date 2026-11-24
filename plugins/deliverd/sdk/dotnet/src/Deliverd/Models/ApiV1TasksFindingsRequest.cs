using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1TasksFindingsRequest
{
    /// <summary>
    /// hypothesis, test, evidence, finding, conclusion, recommendation, decision, risk, question or action. A decision is recorded as a suggestion until a person confirms it
    /// </summary>
    [JsonPropertyName("kind")]
    public required Kind8 Kind { get; init; }

    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// The substance, written to be read by a person. Not your reasoning — what you tested, saw or concluded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    [MaxLength(4000)]
    public string? Body { get; init; }

    /// <summary>
    /// Short pieces of evidence: a log line, a claim value, a measurement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evidence")]
    [MaxLength(10)]
    public IReadOnlyList<string>? Evidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
