using System.ComponentModel.DataAnnotations;
using AlphaAi.Core.Validation.Attributes;

namespace AlphaAi.Requests.Symbols;

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
