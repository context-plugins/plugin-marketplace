using RelmCrm.Core.Validation.Attributes;

namespace RelmCrm.Requests.Companies;

/// <summary>
/// The inputs of the ListCompanies operation.
/// </summary>
public sealed record ListCompaniesRequest
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

    public string? Domain { get; init; }
}
