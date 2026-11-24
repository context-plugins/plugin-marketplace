using System.Collections.Generic;
using Fillo.Models.Enums;

namespace Fillo.Requests.Responses;

/// <summary>
/// The inputs of the ExportFormResponses operation.
/// </summary>
public sealed record ExportFormResponsesRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

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
    /// Field filter as <c>fieldId:op:value</c>, repeatable.
    /// </summary>
    public IReadOnlyList<string>? Where { get; init; }
}
