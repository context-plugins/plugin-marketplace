using System;
using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Core.Validation;
using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Models;

/// <summary>
/// One execution of a watch. Image URLs are short-lived signed links and may 404 for runs older than the bucket lifecycle.
/// </summary>
public record WatchRun
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("watchId")]
    public Guid? WatchId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusRendexRenderingWatchApi? Status { get; init; }

    /// <summary>
    /// Null until the run completes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changed")]
    public bool? Changed { get; init; }

    /// <summary>
    /// 0..1 fraction of the page that changed; null for text-only or failed runs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diffScore")]
    public double? DiffScore { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diffPixels")]
    public int? DiffPixels { get; init; }

    /// <summary>
    /// Signed "before" baseline capture
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("beforeUrl")]
    [Format(FormatKind.Uri)]
    public string? BeforeUrl { get; init; }

    /// <summary>
    /// Signed "after" capture
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterUrl")]
    [Format(FormatKind.Uri)]
    public string? AfterUrl { get; init; }

    /// <summary>
    /// Signed highlighted overlay
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diffOverlayUrl")]
    [Format(FormatKind.Uri)]
    public string? DiffOverlayUrl { get; init; }

    /// <summary>
    /// Signed image cropped tight to the change ("what changed") — post straight into Slack/a ticket. Null when the run had no discrete visual region (dimensions-only or text-only change).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cropUrl")]
    [Format(FormatKind.Uri)]
    public string? CropUrl { get; init; }

    /// <summary>
    /// Normalized (0..1) union box of the changed regions. Null when there is no discrete region.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changedRegion")]
    public WatchChangedRegion? ChangedRegion { get; init; }

    /// <summary>
    /// One-line plain-English "what changed" summary (Pro+; AI from the text diff, or a templated line from the changed region for visual-only changes). Same value the watch.changed webhook <c>summary</c> field carries. Null when unavailable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aiSummary")]
    public string? AiSummary { get; init; }

    /// <summary>
    /// Present for text/both runs; null otherwise
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("textDiff")]
    public TextDiff? TextDiff { get; init; }

    /// <summary>
    /// Net credits charged for this run (0 after a refund or for the demo account)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditsCharged")]
    public int? CreditsCharged { get; init; }

    /// <summary>
    /// Free-text failure reason when status is failed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// Structured failure reason; null until/unless the run fails. Branch on this instead of parsing error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorCode")]
    public ErrorCode? ErrorCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completedAt")]
    public DateTimeOffset? CompletedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
