using System.Collections.Generic;
using Fillo.Core.Validation.Attributes;
using Fillo.Models.Enums;

namespace Fillo.Requests.Responses;

/// <summary>
/// The inputs of the ListFormResponses operation.
/// </summary>
public sealed record ListFormResponsesRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    /// <summary>
    /// The id from a previous page's nextCursor. Omit for the first page.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Page size, 1–100. Default 50.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;

    /// <summary>
    /// Date window: 7d, 30d, 90d, or all (default).
    /// </summary>
    public RangeEnum? Range { get; init; }

    /// <summary>
    /// Free-text search across answers and source.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Match the submission source (host + path).
    /// </summary>
    public string? Source { get; init; }

    /// <summary>
    /// Exact identify() external id.
    /// </summary>
    public string? Respondent { get; init; }

    /// <summary>
    /// Field filter as <c>fieldId:op:value</c>, repeatable. op is one of eq, neq, contains, gt, lt, answered, not_answered.
    /// </summary>
    public IReadOnlyList<string>? Where { get; init; }

    /// <summary>
    /// Set to 1 to return the withheld queue INSTEAD of accepted responses — the two sets are never mixed. Requires responses:manage on top of responses:read.
    /// </summary>
    public Held? Held { get; init; }
}
