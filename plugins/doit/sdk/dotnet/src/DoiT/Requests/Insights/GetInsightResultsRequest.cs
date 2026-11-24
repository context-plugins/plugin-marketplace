using System.Collections.Generic;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Requests.Insights;

/// <summary>
/// The inputs of the GetInsightResults operation.
/// </summary>
public sealed record GetInsightResultsRequest
{
    /// <summary>
    /// Free-text search term to filter insights by title or description.
    /// </summary>
    public string? SearchTerm { get; init; }

    /// <summary>
    /// Filter by one or more display statuses.
    /// </summary>
    public IReadOnlyList<DisplayStatus1>? DisplayStatus { get; init; }

    /// <summary>
    /// Filter by insight category.
    /// </summary>
    public Category1? Category { get; init; }

    /// <summary>
    /// Filter by cloud provider (e.g. "aws", "gcp", "azure").
    /// </summary>
    public string? CloudProvider { get; init; }

    /// <summary>
    /// the source that generated insights
    /// </summary>
    public IReadOnlyList<string>? Source { get; init; }

    /// <summary>
    /// Filter by one or more priority levels.
    /// </summary>
    public IReadOnlyList<Priority1>? Priority { get; init; }

    /// <summary>
    /// Filter by one or more tags (e.g. security certification labels like "ISO").
    /// </summary>
    public IReadOnlyList<string>? Tag { get; init; }

    /// <summary>
    /// When true, return only insights flagged as easy wins.
    /// </summary>
    public bool? EasyWin { get; init; }

    /// <summary>
    /// When true, return only insights that have associated CloudFlow automations.
    /// </summary>
    public bool? CloudFlows { get; init; }

    /// <summary>
    /// Token from a previous response to fetch the next page.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Maximum number of results per page (default 50, max 500).
    /// </summary>
    [Minimum(1)]
    [Maximum(500)]
    public int MaxResults { get; init; } = 50;
}
