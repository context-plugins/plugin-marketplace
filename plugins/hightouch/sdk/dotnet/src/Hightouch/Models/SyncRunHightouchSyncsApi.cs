using System;
using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

public record SyncRunHightouchSyncsApi
{
    /// <summary>
    /// The sync run's id
    /// </summary>
    [JsonPropertyName("id")]
    public required double Id { get; init; }

    /// <summary>
    /// The timestamp when sync run was created. In most cases this will be
    /// equivalent to <c>startedAt</c>, but it may be earlier if the sync was triggered
    /// while a run was already in progress, and the new run didn't start for
    /// a while.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The timestamp when the sync run started
    /// </summary>
    [JsonPropertyName("startedAt")]
    public required DateTimeOffset StartedAt { get; init; }

    /// <summary>
    /// The timestamp when the sync run finished
    /// </summary>
    [JsonPropertyName("finishedAt")]
    public required DateTimeOffset FinishedAt { get; init; }

    /// <summary>
    /// The number of rows in the query.
    /// </summary>
    [JsonPropertyName("querySize")]
    public required double QuerySize { get; init; }

    /// <summary>
    /// The status of sync run
    /// </summary>
    [JsonPropertyName("status")]
    public required SyncRunStatus1 Status { get; init; }

    /// <summary>
    /// The completion ratio of sync run, showing the progress of a sync run
    /// </summary>
    [JsonPropertyName("completionRatio")]
    public required double CompletionRatio { get; init; }

    /// <summary>
    /// The number of planned rows that this sync run was supposed to execute.
    /// <para>
    /// Note that the counts for <c>successfulRows</c> and <c>failedRows</c> may not add up
    /// to <c>plannedRows</c> if the sync was cancelled.
    /// </para>
    /// </summary>
    [JsonPropertyName("plannedRows")]
    public required PlannedRows PlannedRows { get; init; }

    /// <summary>
    /// The number of rows that were successfully processed by the destination.
    /// </summary>
    [JsonPropertyName("successfulRows")]
    public required SuccessfulRows SuccessfulRows { get; init; }

    /// <summary>
    /// The number of rows that we attempted to sync, but were rejected by the
    /// destination.
    /// <para>
    /// This does not include rows that weren't attempted due to the sync being
    /// cancelled.
    /// </para>
    /// </summary>
    [JsonPropertyName("failedRows")]
    public required FailedRows FailedRows { get; init; }

    /// <summary>
    /// Error message if the sync run didn't finish successfully
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }
}
