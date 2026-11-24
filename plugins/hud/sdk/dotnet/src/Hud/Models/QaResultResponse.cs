using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// One result of a check on a subject: a trace, or a version of a task.
/// </summary>
public record QaResultResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("check_key")]
    public required string CheckKey { get; init; }

    /// <summary>
    /// What a check judges: a completed evaluation trace, or a task's current version.
    /// </summary>
    [JsonPropertyName("subject_type")]
    public required QaSubjectType SubjectType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject_trace_id")]
    public SubjectTraceId? SubjectTraceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject_task_id")]
    public SubjectTaskId? SubjectTaskId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject_task_version_id")]
    public SubjectTaskVersionId? SubjectTaskVersionId { get; init; }

    /// <summary>
    /// Where a result's verdict comes from.
    /// </summary>
    [JsonPropertyName("source")]
    public required QaResultSource Source { get; init; }

    [JsonPropertyName("status")]
    public required QaResultStatus Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verdict")]
    public Verdict1? Verdict { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public ResultHudPlatformQaApi? Result { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legacy_result")]
    public LegacyResult? LegacyResult { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public Note? Note { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at")]
    public CompletedAt? CompletedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("run_id")]
    public RunId? RunId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analysis_trace_id")]
    public AnalysisTraceId? AnalysisTraceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
