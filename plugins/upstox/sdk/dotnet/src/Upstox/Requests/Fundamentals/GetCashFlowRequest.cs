using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Fundamentals;

/// <summary>
/// The inputs of the GetCashFlow operation.
/// </summary>
public sealed record GetCashFlowRequest
{
    /// <summary>
    /// ISIN of the company
    /// </summary>
    [RegularExpression("^[A-Z]{2}[A-Z0-9]{9}[0-9]$")]
    public required string Isin { get; init; }

    /// <summary>
    /// Report type. Allowed values: consolidated, standalone
    /// </summary>
    [RegularExpression("^(consolidated|standalone)$")]
    public string Type { get; init; } = "consolidated";

    /// <summary>
    /// Whether to include the full financial statement
    /// </summary>
    public bool Fs { get; init; } = false;
}
