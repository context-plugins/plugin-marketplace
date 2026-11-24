using RelmCrm.Core.Validation.Attributes;

namespace RelmCrm.Requests.Activities;

/// <summary>
/// The inputs of the ListActivities operation.
/// </summary>
public sealed record ListActivitiesRequest
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

    public string? ContactId { get; init; }

    public string? DealId { get; init; }

    /// <summary>
    /// A registered activity.type value (validated).
    /// </summary>
    public string? Type { get; init; }
}
