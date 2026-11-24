using System;
using Apibara.Core.Validation.Attributes;
using Apibara.Models.Enums;

namespace Apibara.Requests.Market;

/// <summary>
/// The inputs of the MarketSoldPriceStats operation.
/// </summary>
public sealed record MarketSoldPriceStatsRequest
{
    public required string Make { get; init; }

    public string? Model { get; init; }

    [Minimum(1900)]
    [Maximum(2100)]
    public int? Year { get; init; }

    public string? Damage { get; init; }

    public Auction? Auction { get; init; }

    public DateTimeOffset? SaleDateFrom { get; init; }

    public DateTimeOffset? SaleDateTo { get; init; }
}
