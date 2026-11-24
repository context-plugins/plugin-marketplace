using System.ComponentModel.DataAnnotations;
using CompSniper.Models;

namespace CompSniper.Requests.ShippingRates;

/// <summary>
/// The inputs of the GetShippingRates operation.
/// </summary>
public sealed record GetShippingRatesRequest
{
    /// <summary>
    /// Replays a completed identical quote without consuming another shipping request. Use a new key for a different request body.
    /// </summary>
    [StringLength(128, MinimumLength = 1)]
    [RegularExpression("^[!-~]+$")]
    public string? IdempotencyKey { get; init; }

    public required ShippingRateRequest Body { get; init; }
}
