using RelmCrm.Core.Validation.Attributes;

namespace RelmCrm.Requests.Deals;

/// <summary>
/// The inputs of the ListDeals operation.
/// </summary>
public sealed record ListDealsRequest
{
    /// <summary>
    /// Page size (default 25, max 100).
    /// </summary>
    [Maximum(100)]
    public int Limit { get; init; } = 25;

    /// <summary>
    /// Opaque keyset cursor from a prior next_cursor.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Include soft-deleted rows.
    /// </summary>
    public bool? IncludeDeleted { get; init; }

    public string? Q { get; init; }

    /// <summary>
    /// Scope to ONE pipeline (key or pl_ id). Omit and you get deals from ALL pipelines merged - pass this whenever you reason about a single funnel, since stage keys are not unique across pipelines. Alias: pipeline_id.
    /// </summary>
    public string? Pipeline { get; init; }

    public string? PipelineId { get; init; }

    public string? Stage { get; init; }

    public string? CompanyId { get; init; }

    public string? PrimaryContactId { get; init; }
}
