using System;
using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Core.Validation;
using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Models;

/// <summary>
/// A monitoring configuration. webhookUrl is redacted to its host on read.
/// </summary>
public record Watch
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    /// <summary>
    /// Null when unset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intervalMinutes")]
    public int? IntervalMinutes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diffMode")]
    public DiffMode? DiffMode { get; init; }

    /// <summary>
    /// 0..1 fraction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("threshold")]
    public double? Threshold { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("renderParams")]
    public object? RenderParams { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aiSummary")]
    public bool? AiSummary { get; init; }

    /// <summary>
    /// Redacted to host; null when no webhook channel
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookUrl")]
    public string? WebhookUrl { get; init; }

    /// <summary>
    /// Null when unset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notifyEmail")]
    public string? NotifyEmail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1RendexRenderingWatchApi? Status { get; init; }

    /// <summary>
    /// Short-lived signed URL of the watch's current baseline — the "before" image used in the next change comparison; null until a baseline exists
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baselineImageUrl")]
    [Format(FormatKind.Uri)]
    public string? BaselineImageUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baselineCapturedAt")]
    public DateTimeOffset? BaselineCapturedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastRunAt")]
    public DateTimeOffset? LastRunAt { get; init; }

    /// <summary>
    /// Null while paused
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextRunAt")]
    public DateTimeOffset? NextRunAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastChangedAt")]
    public DateTimeOffset? LastChangedAt { get; init; }

    /// <summary>
    /// completed | failed | null
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastStatus")]
    public string? LastStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consecutiveFailures")]
    public int? ConsecutiveFailures { get; init; }

    /// <summary>
    /// When the target last blocked the RendexWatch identity; null if never
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uaBlockedAt")]
    public DateTimeOffset? UaBlockedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// The "what changed" enrichment from this watch's most recent CHANGED run — returned on GET /v1/watches and GET /v1/watches/{id} so a polling "changed" trigger gets the detail inline (no follow-up call to /:id/runs). Null when the watch has never changed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastChange")]
    public LastChange? LastChange { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
