using System;
using DidLogic.Core.Validation.Attributes;
using DidLogic.Models.Enums;

namespace DidLogic.Requests.KycDocuments;

/// <summary>
/// The inputs of the DocumentsIndex operation.
/// </summary>
public sealed record DocumentsIndexRequest
{
    /// <summary>
    /// Filter documents by IDs (comma-separated)
    /// </summary>
    public string? Ids { get; init; }

    /// <summary>
    /// Filter documents by identity ID from identities_index, identities_create
    /// </summary>
    public int? IdentityId { get; init; }

    /// <summary>
    /// Filter documents by approval status
    /// </summary>
    public ApprovementStatus? ApprovementStatus { get; init; }

    /// <summary>
    /// Filter documents created from this date
    /// </summary>
    public DateTimeOffset? UploadDateFrom { get; init; }

    /// <summary>
    /// Filter documents created until this date
    /// </summary>
    public DateTimeOffset? UploadDateTo { get; init; }

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
