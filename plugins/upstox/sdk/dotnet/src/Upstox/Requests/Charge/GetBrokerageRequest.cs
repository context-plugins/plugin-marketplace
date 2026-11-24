using System.ComponentModel.DataAnnotations;
using Upstox.Core.Validation.Attributes;

namespace Upstox.Requests.Charge;

/// <summary>
/// The inputs of the GetBrokerage operation.
/// </summary>
public sealed record GetBrokerageRequest
{
    /// <summary>
    /// Key of the instrument
    /// </summary>
    [RegularExpression("^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$")]
    public required string InstrumentToken { get; init; }

    /// <summary>
    /// Quantity with which the order is to be placed
    /// </summary>
    [Minimum(0)]
    public required int Quantity { get; init; }

    /// <summary>
    /// Product with which the order is to be placed
    /// </summary>
    public required string Product { get; init; }

    /// <summary>
    /// Indicates whether its a BUY or SELL order
    /// </summary>
    public required string TransactionType { get; init; }

    /// <summary>
    /// Price with which the order is to be placed
    /// </summary>
    [Minimum(0.0)]
    public required double Price { get; init; }
}
