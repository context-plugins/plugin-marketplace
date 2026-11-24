using System.Collections.Generic;
using System.Text.Json.Serialization;
using Sapling.Core.Models;
using Sapling.Models.Enums;

namespace Sapling.Models;

public record ApiV1AidetectResponse
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
    /// The shareable report for this result (create_report: true), or null when none was made.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("report")]
    public Report? Report { get; init; }

    /// <summary>
    /// Why report is null: nonpersist (team keeps no data), disabled (AI detector history off), text_not_retained (history keeps no text), unconfirmed_email, quota (history full), unscorable, error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("report_skip_reason")]
    public ReportSkipReason? ReportSkipReason { get; init; }

    /// <summary>
    /// Present only for a batch (<c>texts</c>) request: one entry per input text, in input order, each shaped exactly like the single-text response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<Result>? Results { get; init; }

    /// <summary>
    /// Contiguous passages of sentences scoring &gt;= 0.5, as character offsets into text, with their length-weighted score. Absent when sentence offsets are unavailable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segments")]
    public IReadOnlyList<Segment>? Segments { get; init; }

    /// <summary>
    /// Present only when the request sent return_usage: true. characters is the billable character count the request submitted; see the return_usage request field for the exact semantics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public Usage? Usage { get; init; }

    /// <summary>
    /// Plain-language summary: mixed when part of the text scores as AI (ai_fraction &gt;= 0.2) or the overall score is &gt;= 0.5 with less than 80% of the text scoring as AI. Absent if the text could not be scored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verdict")]
    public Verdict? Verdict { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
