using System;
using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Core.Validation;
using Rendex.Core.Validation.Attributes;

namespace Rendex.Models;

/// <summary>
/// Result of POST /v1/watches/test (the pre-create dry-run).
/// </summary>
public record WatchTestResult
{
    /// <summary>
    /// True when the page was rendered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ok")]
    public bool? Ok { get; init; }

    /// <summary>
    /// True when the page could be read (not blocked/errored).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reachable")]
    public bool? Reachable { get; init; }

    /// <summary>
    /// Capture format (png/jpeg/webp/pdf).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public string? Format { get; init; }

    /// <summary>
    /// Navigated page HTTP status (URL mode; null for geo).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpStatus")]
    public int? HttpStatus { get; init; }

    /// <summary>
    /// Whether the geo (Decodo) render path was used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usedGeo")]
    public bool? UsedGeo { get; init; }

    /// <summary>
    /// Signed URL of the captured screenshot (short-lived).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("screenshotUrl")]
    [Format(FormatKind.Uri)]
    public string? ScreenshotUrl { get; init; }

    /// <summary>
    /// Text a text-watch would compare (text mode only).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extractedText")]
    public string? ExtractedText { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("capturedAt")]
    public DateTimeOffset? CapturedAt { get; init; }

    /// <summary>
    /// Actionable reason when reachable is false (blocked / needs login / HTTP error).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
