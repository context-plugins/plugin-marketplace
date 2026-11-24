using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.TcGplayer;

/// <summary>
/// The inputs of the GetV1TcgplayerListings operation.
/// </summary>
public sealed record GetV1TcgplayerListingsRequest
{
    [MaxLength(300)]
    public string? Keyword { get; init; }

    [Minimum(1)]
    public int? ProductId { get; init; }

    [Minimum(1)]
    [Maximum(50)]
    public int Page { get; init; } = 1;

    [Minimum(1)]
    [Maximum(50)]
    public int Count { get; init; } = 25;

    public string? Condition { get; init; }

    public string? Variant { get; init; }

    public string? Language { get; init; }

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
