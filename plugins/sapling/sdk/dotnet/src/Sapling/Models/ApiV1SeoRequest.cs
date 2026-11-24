using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record ApiV1SeoRequest
{
    /// <summary>
    /// Sapling API key. Required when no "Authorization: Bearer &lt;key&gt;" header is sent; when both are sent, the body key takes precedence over the header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// Target keyword phrases, most important first (max 10). Each is measured in the text and steered into the suggestions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keywords")]
    [MaxLength(10)]
    public IReadOnlyList<string>? Keywords { get; init; }

    /// <summary>
    /// ISO 639-1 language code of the text (default "en"). Selects the readability formulas; supported for en, de, es, fr, it, nl, pl, ru — other codes are accepted and get null readability.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lang")]
    public string? Lang { get; init; }

    /// <summary>
    /// When true, a successful JSON-object response additionally carries "usage": {"characters": &lt;n&gt;} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("return_usage")]
    public bool? ReturnUsage { get; init; } = false;

    /// <summary>
    /// Generate titles/meta descriptions/slug/keywords with the LLM (default true). false = deterministic stats only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("suggestions")]
    public bool? Suggestions { get; init; }

    /// <summary>
    /// The text to process. Plain text or HTML (tags are handled server-side).
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
