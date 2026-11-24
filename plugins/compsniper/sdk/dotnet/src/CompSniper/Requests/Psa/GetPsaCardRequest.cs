using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Psa;

/// <summary>
/// The inputs of the GetPsaCard operation.
/// </summary>
public sealed record GetPsaCardRequest
{
    [RegularExpression("^\\d{1,12}$")]
    public string? SpecId { get; init; }

    [MaxLength(200)]
    public string? Keyword { get; init; }

    [Minimum(0)]
    [Maximum(50)]
    public int Count { get; init; } = 10;

    [Minimum(0)]
    [Maximum(120)]
    public int TimeRange { get; init; } = 0;

    public string? Grade { get; init; }

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
