using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Sapling.Core.Models;
using Sapling.Models.AnyOf;

namespace Sapling.Models;

public record ApiV1StyleguideRequest
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
    /// The style rules to enforce: 1-20 rules, each a rule name string (at most 80 characters) or a {name, description} object (description at most 400 characters adds nuance the model follows). Names must be unique case-insensitively.
    /// </summary>
    [JsonPropertyName("rules")]
    [MinLength(1)]
    [MaxLength(20)]
    public required IReadOnlyList<Rule3> Rules { get; init; }

    /// <summary>
    /// The name of a saved ruleset (created via POST /api/v1/styleguide/rulesets) to check against in place of inline rules. Matched case-insensitively within the API key's account (its team, for team keys). Provide exactly one of rules or ruleset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ruleset")]
    [StringLength(100, MinimumLength = 1)]
    public string? Ruleset { get; init; }

    /// <summary>
    /// The text to check. Checked as submitted — markup is not stripped.
    /// </summary>
    [JsonPropertyName("text")]
    [StringLength(10000, MinimumLength = 1)]
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
