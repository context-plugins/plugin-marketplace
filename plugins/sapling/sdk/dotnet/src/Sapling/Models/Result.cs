using System.Collections.Generic;
using System.Text.Json.Serialization;
using Sapling.Core.Models;
using Sapling.Models.Enums;

namespace Sapling.Models;

public record Result
{
    /// <summary>
    /// True when the input is of a kind with a higher false-positive rate; see low_confidence_reasons.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("low_confidence")]
    public bool? LowConfidence { get; init; }

    /// <summary>
    /// short_text: under 500 characters. list_format: mostly bullet or numbered lines.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("low_confidence_reasons")]
    public IReadOnlyList<LowConfidenceReason>? LowConfidenceReasons { get; init; }

    /// <summary>
    /// Contiguous passages of sentences scoring &gt;= 0.5, as character offsets into text, with their length-weighted score. Absent when sentence offsets are unavailable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segments")]
    public IReadOnlyList<Segment>? Segments { get; init; }

    /// <summary>
    /// Plain-language summary: mixed when part of the text scores as AI (ai_fraction &gt;= 0.2) or the overall score is &gt;= 0.5 with less than 80% of the text scoring as AI. Absent if the text could not be scored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verdict")]
    public Verdict? Verdict { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
