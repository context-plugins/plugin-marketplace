using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Payments;

/// <summary>
/// The inputs of the GetExchangeRates operation.
/// </summary>
public sealed record GetExchangeRatesRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    public required IReadOnlyList<ExchangeRateRequestDto> Body { get; init; }
}
