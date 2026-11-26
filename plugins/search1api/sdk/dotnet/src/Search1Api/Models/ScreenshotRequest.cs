using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Search1Api.Core.Validation;
using Search1Api.Core.Validation.Attributes;
using Search1Api.Models.Enums;

namespace Search1Api.Models;

public record ScreenshotRequest
{
    [JsonPropertyName("url")]
    [MaxLength(4096)]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public Format? Format { get; init; } = Format.Png;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("full_page")]
    public bool? FullPage { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("viewport")]
    public Viewport? Viewport { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wait_until")]
    public WaitUntil? WaitUntil { get; init; } = WaitUntil.Load;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wait_for_selector")]
    [StringLength(500, MinimumLength = 1)]
    public string? WaitForSelector { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selector")]
    [StringLength(500, MinimumLength = 1)]
    public string? Selector { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delay_ms")]
    [Minimum(0)]
    [Maximum(5000)]
    public int? DelayMs { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeout_ms")]
    [Minimum(1000)]
    [Maximum(30000)]
    public int? TimeoutMs { get; init; } = 20000;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quality")]
    [Minimum(1)]
    [Maximum(100)]
    public int? Quality { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("omit_background")]
    public bool? OmitBackground { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color_scheme")]
    public ColorScheme? ColorScheme { get; init; } = ColorScheme.Light;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("animations")]
    public Animations? Animations { get; init; } = Animations.Disabled;
}
