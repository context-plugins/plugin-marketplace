using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Sapling.Core.Models;
using Sapling.Models.Enums;

namespace Sapling.Models;

public record ApiV1SimplifyRequest
{
    /// <summary>
    /// Sapling API key. Required when no "Authorization: Bearer &lt;key&gt;" header is sent; when both are sent, the body key takes precedence over the header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// ISO 639-1 code used to pick the readability formula for the before/after scores and the billed language. Omit for auto-detection (falls back to "en"). The rewrite itself always stays in the text's own language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lang")]
    [StringLength(20, MinimumLength = 2)]
    [RegularExpression("\\S")]
    public string? Lang { get; init; }

    /// <summary>
    /// Terms the rewrite must keep exactly as written (product names, defined legal terms).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preserve_terms")]
    [MaxLength(20)]
    public IReadOnlyList<string>? PreserveTerms { get; init; }

    /// <summary>
    /// Target audience: "plain" (plain-language style for a general audience, the default), "elementary" (~US grade 3-5), "middle_school" (~grade 6-8) or "high_school" (~grade 9-10).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reading_level")]
    public ReadingLevel? ReadingLevel { get; init; }

    /// <summary>
    /// When true, a successful JSON-object response additionally carries "usage": {"characters": &lt;n&gt;} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("return_usage")]
    public bool? ReturnUsage { get; init; } = false;

    /// <summary>
    /// The text to simplify. Sent to the model as-is — markup and line structure are preserved, not stripped.
    /// </summary>
    [JsonPropertyName("text")]
    [StringLength(5000, MinimumLength = 1)]
    [RegularExpression("\\S")]
    public required string Text { get; init; }

    /// <summary>
    /// Batch form: 1 to 10 texts, each processed with the same options as a single request. Send exactly one of <c>text</c> or <c>texts</c>; the response is then {"results": [...]}, one single-text response per input text in input order. Size limits are on the endpoint's docs page -- most cap the combined length of all items at the single-text limit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("texts")]
    [MinLength(1)]
    [MaxLength(10)]
    public IReadOnlyList<string>? Texts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
