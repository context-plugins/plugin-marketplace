using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.MutualFund;

/// <summary>
/// The inputs of the GetMutualFundOrder operation.
/// </summary>
public sealed record GetMutualFundOrderRequest
{
    /// <summary>
    /// Mutual fund order id
    /// </summary>
    [RegularExpression("^[-a-zA-Z0-9]+")]
    public required string OrderId { get; init; }
}
