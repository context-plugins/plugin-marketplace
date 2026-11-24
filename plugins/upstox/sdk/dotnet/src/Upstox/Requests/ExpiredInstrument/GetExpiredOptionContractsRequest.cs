using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.ExpiredInstrument;

/// <summary>
/// The inputs of the GetExpiredOptionContracts operation.
/// </summary>
public sealed record GetExpiredOptionContractsRequest
{
    /// <summary>
    /// Instrument key for an underlying symbol
    /// </summary>
    [RegularExpression("^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$")]
    public required string InstrumentKey { get; init; }

    /// <summary>
    /// Expiry date in format: YYYY-mm-dd
    /// </summary>
    [RegularExpression("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")]
    public required string ExpiryDate { get; init; }
}
