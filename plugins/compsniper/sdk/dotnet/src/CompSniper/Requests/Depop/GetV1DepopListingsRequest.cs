using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Depop;

/// <summary>
/// The inputs of the GetV1DepopListings operation.
/// </summary>
public sealed record GetV1DepopListingsRequest
{
    [MaxLength(300)]
    public required string Keyword { get; init; }

    public Country Country { get; init; } = Country.Us;

    [Minimum(1)]
    [Maximum(48)]
    public int Count { get; init; } = 24;

    [MaxLength(200)]
    public string? Cursor { get; init; }

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
