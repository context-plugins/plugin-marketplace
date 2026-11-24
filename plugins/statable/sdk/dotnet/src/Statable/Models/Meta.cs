using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

/// <summary>
/// Present only on breakdown responses.
/// </summary>
public record Meta
{
    /// <summary>
    /// Total distinct values for the window, across all pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public int? Total { get; init; }

    /// <summary>
    /// Effective limit after clamping.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public int? Offset { get; init; }

    /// <summary>
    /// True when offset + returned rows &lt; total. Page again with offset += limit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_more")]
    public bool? HasMore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
