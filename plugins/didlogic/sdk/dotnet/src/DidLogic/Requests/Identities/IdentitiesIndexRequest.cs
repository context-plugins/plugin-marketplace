using System;
using DidLogic.Core.Validation.Attributes;
using DidLogic.Models.Enums;

namespace DidLogic.Requests.Identities;

/// <summary>
/// The inputs of the IdentitiesIndex operation.
/// </summary>
public sealed record IdentitiesIndexRequest
{
    /// <summary>
    /// Filter identities by IDs (comma-separated); <c>identity_id</c> from documents_index, documents_show
    /// </summary>
    public string? Ids { get; init; }

    /// <summary>
    /// Filter identities by name (partial match)
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Filter identities created from this date (YYYY-MM-DD)
    /// </summary>
    public DateTimeOffset? CreatedAtFrom { get; init; }

    /// <summary>
    /// Filter identities created until this date (YYYY-MM-DD)
    /// </summary>
    public DateTimeOffset? CreatedAtTo { get; init; }

    /// <summary>
    /// Field to sort by
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// Sort order
    /// </summary>
    public Order Order { get; init; } = Order.Desc;

    /// <summary>
    /// Page number for pagination (starts from 1)
    /// </summary>
    [Minimum(1)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// Number of items per page
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PerPage { get; init; } = 20;
}
