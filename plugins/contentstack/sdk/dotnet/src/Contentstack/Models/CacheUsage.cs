using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Cache revalidation usage metrics for the organization.
/// </summary>
public record CacheUsage
{
    /// <summary>
    /// Number of cache revalidation requests used in the current period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("used")]
    public int? Used { get; init; }

    /// <summary>
    /// Maximum number of cache revalidation requests allowed per period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; }

    /// <summary>
    /// Start of the current usage period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period_start")]
    public DateTimeOffset? PeriodStart { get; init; }

    /// <summary>
    /// End of the current usage period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period_end")]
    public DateTimeOffset? PeriodEnd { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
