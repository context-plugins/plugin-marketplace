using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Rendex.Core.Validation;
using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Models;

/// <summary>
/// Validated with a STRICT schema — any field outside the list below is REJECTED with a
/// 400 VALIDATION_ERROR, not silently ignored. Render knobs go under <c>renderParams</c> (also strict).
/// </summary>
public record CreateWatchRequest
{
    /// <summary>
    /// The page to monitor
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Optional label
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(120)]
    public string? Name { get; init; }

    /// <summary>
    /// Check frequency in minutes. The accepted minimum is your plan's floor — Free 1440
    /// (daily), Starter 180 (3h), Pro 30, Enterprise 5. A faster value returns 403
    /// WATCH_INTERVAL_TOO_FAST.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intervalMinutes")]
    [Minimum(5)]
    [Maximum(43200)]
    public int? IntervalMinutes { get; init; } = 1440;

    /// <summary>
    /// How changes are detected. Default <c>both</c> = a pixel diff (with a highlighted overlay) AND a full-page text diff, alerting on either — catches any change, visual or text. <c>visual</c> or <c>text</c> narrow to a single signal. (<c>text</c>/<c>both</c> extract the full visible page text, not just the article body.)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diffMode")]
    public DiffMode1? DiffMode { get; init; } = DiffMode1.Both;

    /// <summary>
    /// Visual sensitivity (0..1). Low (default 0.01) alerts on ANY change, including a small one on a long page (a changed-region test, not a whole-page pixel ratio). <c>0.06</c>+ = only MAJOR visual changes (whole-page ratio). Does not affect text detection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("threshold")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? Threshold { get; init; } = 0.01d;

    /// <summary>
    /// Render knobs applied on every check — a subset of the screenshot capture params, stored on
    /// the watch and fed to the renderer each run. Inline source params (<c>url</c>/<c>html</c>/<c>markdown</c>/
    /// <c>data</c>) and credential knobs (<c>cookies</c>/<c>headers</c>/<c>css</c>/<c>js</c>) are NOT accepted here; the
    /// watch's target is the top-level <c>url</c>. Validated with a STRICT schema: any capture param
    /// outside the list below (e.g. <c>quality</c>, <c>css</c>, <c>js</c>, <c>resize*</c>, <c>pdf*</c>, <c>userAgent</c>,
    /// <c>cookies</c>, <c>headers</c>) is REJECTED with a 400 VALIDATION_ERROR — extras are NOT silently ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("renderParams")]
    public WatchRenderParams? RenderParams { get; init; }

    /// <summary>
    /// Pro+ — opt in to an AI-written one-sentence "what changed" summary on each detected change. Off by default. Every change already gets a free templated summary regardless of this flag; enabling it upgrades a text change's summary to a Workers-AI sentence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aiSummary")]
    public bool? AiSummary { get; init; } = false;

    /// <summary>
    /// Starter+ — HMAC-signed change-webhook target. Delivered payload: the WatchWebhookEvent schema.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookUrl")]
    [Format(FormatKind.Uri)]
    public string? WebhookUrl { get; init; }

    /// <summary>
    /// Any plan — send change alerts here (defaults to your account email if omitted). Anti-abuse: must be your OWN account email; any other address is rejected with 400 VALIDATION_ERROR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notifyEmail")]
    [Format(FormatKind.Email)]
    public string? NotifyEmail { get; init; }

    /// <summary>
    /// Create the watch paused (no baseline capture or charge until resumed). Paused watches still count toward your plan's watch limit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paused")]
    public bool? Paused { get; init; } = false;
}
