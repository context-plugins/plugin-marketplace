using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using AlphAi.Core.Validation.Attributes;

namespace AlphAi.Requests.News;

/// <summary>
/// The inputs of the GetApiNewsBrief operation.
/// </summary>
public sealed record GetApiNewsBriefRequest
{
    /// <summary>
    /// 1–100 distinct symbols, comma-separated or repeated; case-insensitive.
    /// </summary>
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<string> Tickers { get; init; }

    [Minimum(1)]
    [Maximum(168)]
    public int Hours { get; init; } = 24;

    /// <summary>
    /// Maximum grouped stories in each section; this brief has no cursor.
    /// </summary>
    [Minimum(1)]
    [Maximum(20)]
    public int Limit { get; init; } = 20;
}
