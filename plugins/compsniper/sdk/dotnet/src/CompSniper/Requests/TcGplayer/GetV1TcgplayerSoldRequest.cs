using System;
using System.ComponentModel.DataAnnotations;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.TcGplayer;

/// <summary>
/// The inputs of the GetV1TcgplayerSold operation.
/// </summary>
public sealed record GetV1TcgplayerSoldRequest
{
    [MaxLength(300)]
    public string? Keyword { get; init; }

    [Minimum(1)]
    public int? ProductId { get; init; }

    [Minimum(1)]
    [Maximum(250)]
    public int Count { get; init; } = 100;

    public string? Condition { get; init; }

    public string? Variant { get; init; }

    public string? Language { get; init; }

    public History History { get; init; } = History.None;

    public DateTimeOffset? SoldAfter { get; init; }

    public DateTimeOffset? SoldBefore { get; init; }

    public bool Fresh { get; init; } = false;

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
