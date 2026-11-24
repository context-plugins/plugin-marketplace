using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Psa;

/// <summary>
/// The inputs of the ListPsaSets operation.
/// </summary>
public sealed record ListPsaSetsRequest
{
    public Game? Game { get; init; }

    [StringLength(120, MinimumLength = 2)]
    public string? Keyword { get; init; }

    [RegularExpression("^\\d{4}$")]
    public string? Year { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Count { get; init; } = 25;

    [Minimum(1)]
    [Maximum(1000)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
