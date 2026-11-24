using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Fundamentals;

/// <summary>
/// The inputs of the GetKeyRatios operation.
/// </summary>
public sealed record GetKeyRatiosRequest
{
    /// <summary>
    /// ISIN of the company
    /// </summary>
    [RegularExpression("^[A-Z]{2}[A-Z0-9]{9}[0-9]$")]
    public required string Isin { get; init; }
}
