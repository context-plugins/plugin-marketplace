using System.ComponentModel.DataAnnotations;
using AlphAi.Core.Validation.Attributes;

namespace AlphAi.Requests.Symbols;

/// <summary>
/// The inputs of the GetApiSymbolsSectorsBySlug operation.
/// </summary>
public sealed record GetApiSymbolsSectorsBySlugRequest
{
    [RegularExpression("^[a-z0-9-]+$")]
    public required string Slug { get; init; }

    /// <summary>
    /// One-based sector page, 500 tickers per page.
    /// </summary>
    [Minimum(1)]
    [Maximum(10000)]
    public int Page { get; init; } = 1;
}
