using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Models;

public record V1ArtifactRequest
{
    /// <summary>
    /// The Markdown or HTML body to render. Up to ~4MB.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// How to interpret <c>content</c>. 'markdown' is converted to styled HTML; 'html' is used as a body fragment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputFormat")]
    public InputFormat? InputFormat { get; init; } = InputFormat.Markdown;

    /// <summary>
    /// Which artifact formats to produce. Each format charges 1 credit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formats")]
    [MinLength(1)]
    [MaxLength(2)]
    public IReadOnlyList<Format4>? Formats { get; init; }

    /// <summary>
    /// Optional theme applied to the artifact header, body, and footer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branding")]
    public Branding? Branding { get; init; }

    /// <summary>
    /// Optional paper/viewport setup for the PDF and PNG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageSetup")]
    public PageSetup? PageSetup { get; init; }

    /// <summary>
    /// Optional Mustache data. When present, <c>content</c> is rendered as a logic-less Mustache template (plus the branding fields) before conversion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public object? Data { get; init; }

    /// <summary>
    /// Seconds until the hosted URLs expire (3600–2592000). Default 86400 (24h).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresIn")]
    [Minimum(3600)]
    [Maximum(2592000)]
    public int? ExpiresIn { get; init; } = 86400;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
