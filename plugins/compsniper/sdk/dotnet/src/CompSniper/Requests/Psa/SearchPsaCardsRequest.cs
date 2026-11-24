using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Psa;

/// <summary>
/// The inputs of the SearchPsaCards operation.
/// </summary>
public sealed record SearchPsaCardsRequest
{
    [MaxLength(200)]
    public required string Keyword { get; init; }

    [Minimum(1)]
    [Maximum(20)]
    public int Count { get; init; } = 10;

    [Minimum(1)]
    [Maximum(50)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
