using System.Collections.Generic;
using Upstox.Models;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the PlaceMultiOrder operation.
/// </summary>
public sealed record PlaceMultiOrderRequest
{
    public string? Origin { get; init; }

    public required IReadOnlyList<MultiOrderRequest> Body { get; init; }
}
