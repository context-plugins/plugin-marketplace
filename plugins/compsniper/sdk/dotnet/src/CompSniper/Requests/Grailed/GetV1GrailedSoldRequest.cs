using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Grailed;

/// <summary>
/// The inputs of the GetV1GrailedSold operation.
/// </summary>
public sealed record GetV1GrailedSoldRequest
{
    [MaxLength(300)]
    public required string Keyword { get; init; }

    public Department Department { get; init; } = Department.Any;

    public Condition Condition { get; init; } = Condition.Any;

    [Minimum(0.0)]
    public double? MinPrice { get; init; }

    [Minimum(0.0)]
    public double? MaxPrice { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Count { get; init; } = 40;

    [Minimum(1)]
    public int Page { get; init; } = 1;

    public SortBy SortBy { get; init; } = SortBy.Recent;

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
