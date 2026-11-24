using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record ApiV1AidetectRequest
{
    /// <summary>
    /// Also save the result as a shareable report and return its link in report (a single text only, not texts). The report is saved to your AI detector history, where you can revoke the link; anyone with the link can view the text and its scores until it is revoked or expires 90 days after creation. Requires your private API key: OAuth access tokens and public API keys get 400, as does combining it with zero_retention. No report is made (report is null, see report_skip_reason) when your team keeps no data, AI detector history or text retention is turned off, or the account email is unconfirmed; the request is still scored and billed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("create_report")]
    public bool? CreateReport { get; init; } = false;

    /// <summary>
    /// Sapling API key. Required when no "Authorization: Bearer &lt;key&gt;" header is sent; when both are sent, the body key takes precedence over the header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// Language of the text: en, de, es, fr, it, ja, nl or pt. Omit (or "auto") to detect it; other languages are rejected.
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
    /// Include per-sentence scores (default true).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sent_scores")]
    public bool? SentScores { get; init; }

    /// <summary>
    /// The text to process. Plain text or HTML (tags are handled server-side).
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// Batch form: 1 to 10 texts, each processed with the same options as a single request. Send exactly one of <c>text</c> or <c>texts</c>; the response is then {"results": [...]}, one single-text response per input text in input order. Size limits are on the endpoint's docs page -- most cap the combined length of all items at the single-text limit. Requires your own API key; the public demo key is limited to the single <c>text</c> form.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("texts")]
    [MinLength(1)]
    [MaxLength(10)]
    public IReadOnlyList<string>? Texts { get; init; }

    /// <summary>
    /// Keep no copy of the text: the result is not cached (so no certificate hash), and usage is logged without the text. Default false; always on for teams with data retention disabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zero_retention")]
    public bool? ZeroRetention { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
