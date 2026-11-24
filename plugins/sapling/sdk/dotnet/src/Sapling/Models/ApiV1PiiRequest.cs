using System.Collections.Generic;
using System.Text.Json.Serialization;
using Sapling.Core.Models;
using Sapling.Models.Enums;

namespace Sapling.Models;

public record ApiV1PiiRequest
{
    /// <summary>
    /// Sapling API key. Required when no "Authorization: Bearer &lt;key&gt;" header is sent; when both are sent, the body key takes precedence over the header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// If true, the response includes redacted_text with every detected entity replaced by its placeholder.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redact")]
    public bool? Redact { get; init; }

    /// <summary>
    /// When true, a successful JSON-object response additionally carries "usage": {"characters": &lt;n&gt;} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("return_usage")]
    public bool? ReturnUsage { get; init; } = false;

    /// <summary>
    /// The text to scan. Offsets in the response refer to this exact string, so pass raw text (not HTML).
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// Restrict detection to these PII types. Defaults to all deterministic types; person, organization, and location run only when listed here explicitly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("types")]
    public IReadOnlyList<Type1>? Types { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
