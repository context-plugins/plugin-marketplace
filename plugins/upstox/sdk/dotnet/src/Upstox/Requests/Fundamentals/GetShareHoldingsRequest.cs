using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Fundamentals;

/// <summary>
/// The inputs of the GetShareHoldings operation.
/// </summary>
public sealed record GetShareHoldingsRequest
{
    /// <summary>
    /// ISIN of the company
    /// </summary>
    [RegularExpression("^[A-Z]{2}[A-Z0-9]{9}[0-9]$")]
    public required string Isin { get; init; }
}
