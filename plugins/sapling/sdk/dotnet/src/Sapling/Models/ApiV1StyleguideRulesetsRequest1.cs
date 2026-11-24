using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Sapling.Core.Models;
using Sapling.Models.AnyOf;

namespace Sapling.Models;

public record ApiV1StyleguideRulesetsRequest1
{
    /// <summary>
    /// Sapling API key. Required when no "Authorization: Bearer &lt;key&gt;" header is sent; when both are sent, the body key takes precedence over the header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// When true, a successful JSON-object response additionally carries "usage": {"characters": &lt;n&gt;} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("return_usage")]
    public bool? ReturnUsage { get; init; } = false;

    /// <summary>
    /// Rule names must be unique (case-insensitive).
    /// </summary>
    [JsonPropertyName("rules")]
    [MinLength(1)]
    [MaxLength(20)]
    public required IReadOnlyList<Rule21> Rules { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
