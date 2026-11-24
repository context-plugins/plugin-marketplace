using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Rendex.Core.Validation;
using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Models;

/// <summary>
/// All fields optional. <c>webhookUrl</c> and <c>notifyEmail</c> additionally accept <c>null</c> to clear a
/// channel. Set <c>paused</c> true to pause, false to resume. Validated with a STRICT schema — any
/// unknown field is REJECTED with a 400 VALIDATION_ERROR, not silently ignored.
/// <para>
/// <c>renderParams</c> is MERGED over the watch's existing render config: send only the knobs you
/// want to change. A scope-changing renderParams edit (e.g. <c>selector</c>, <c>fullPage</c>,
/// <c>width</c>/<c>height</c>, <c>device</c>) re-baselines on the next run, the same way a <c>url</c> change does.
/// </para>
/// </summary>
public record UpdateWatchRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(120)]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intervalMinutes")]
    [Minimum(5)]
    [Maximum(43200)]
    public int? IntervalMinutes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diffMode")]
    public DiffMode? DiffMode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("threshold")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? Threshold { get; init; }

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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aiSummary")]
    public bool? AiSummary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookUrl")]
    [Format(FormatKind.Uri)]
    public string? WebhookUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notifyEmail")]
    [Format(FormatKind.Email)]
    public string? NotifyEmail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paused")]
    public bool? Paused { get; init; }
}
