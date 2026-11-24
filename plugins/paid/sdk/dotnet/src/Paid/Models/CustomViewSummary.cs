using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CustomViewSummary
{
    [JsonPropertyName("displayId")]
    public required string DisplayId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("status")]
    public required CustomViewSummaryStatus Status { get; init; }

    /// <summary>
    /// How many named queries the view holds.
    /// </summary>
    [JsonPropertyName("queryCount")]
    public required int QueryCount { get; init; }

    /// <summary>
    /// The view's default date range, or null if it has none.
    /// </summary>
    [JsonPropertyName("period")]
    public required CustomViewSummaryPeriod? Period { get; init; }

    /// <summary>
    /// ISO 8601 creation timestamp.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// 'customer': data is scoped to one viewing customer and the view is embeddable per-customer. 'organization': data is org-wide and the view is internal-only.
    /// </summary>
    [JsonPropertyName("scope")]
    public required CustomViewDetailScope Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
