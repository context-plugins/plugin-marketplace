using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Makes the rule emit a value extracted from the first non-empty source instead of the rule name.
/// </summary>
public record AllocationValueExtraction
{
    /// <summary>
    /// Ordered extraction sources; the first non-empty value wins.
    /// </summary>
    [JsonPropertyName("sources")]
    [MinLength(1)]
    [MaxLength(5)]
    public required IReadOnlyList<AllocationValueExtractionSource> Sources { get; init; }

    /// <summary>
    /// What happens when every source is missing or empty on a matching row. "useFallback" (default) emits the fallback value, which is required in that mode; "nextRule" lets the row fall through to the next rule in the group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onMissing")]
    public OnMissing? OnMissing { get; init; } = OnMissing.UseFallback;

    /// <summary>
    /// Literal emitted when every source is missing. Required with onMissing "useFallback" (the default); not allowed with onMissing "nextRule".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fallback")]
    public string? Fallback { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
