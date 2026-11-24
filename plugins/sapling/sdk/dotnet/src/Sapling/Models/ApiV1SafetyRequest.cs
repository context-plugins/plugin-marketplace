using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Sapling.Core.Models;
using Sapling.Core.Validation.Attributes;

namespace Sapling.Models;

public record ApiV1SafetyRequest
{
    /// <summary>
    /// Sapling API key. Required when no "Authorization: Bearer &lt;key&gt;" header is sent; when both are sent, the body key takes precedence over the header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// When true, a successful JSON-object response additionally carries "usage": {"characters": &lt;n&gt;} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("return_usage")]
    public bool? ReturnUsage { get; init; } = false;

    /// <summary>
    /// true = also return the offending passages as spans with offsets and per-passage scores. Default false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spans")]
    public bool? Spans { get; init; }

    /// <summary>
    /// The text to process. Plain text or HTML (tags are handled server-side).
    /// </summary>
    [JsonPropertyName("text")]
    [StringLength(20000, MinimumLength = 1)]
    public required string Text { get; init; }

    /// <summary>
    /// Batch form: 1 to 10 texts, each processed with the same options as a single request. Send exactly one of <c>text</c> or <c>texts</c>; the response is then {"results": [...]}, one single-text response per input text in input order. Size limits are on the endpoint's docs page -- most cap the combined length of all items at the single-text limit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("texts")]
    [MinLength(1)]
    [MaxLength(10)]
    public IReadOnlyList<string>? Texts { get; init; }

    /// <summary>
    /// Flagging cut-off on each category score (default 0.5).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("threshold")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? Threshold { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
