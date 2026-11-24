using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.ExpiredInstrument;

/// <summary>
/// The inputs of the GetExpiriesResponse operation.
/// </summary>
public sealed record GetExpiriesResponseRequest
{
    /// <summary>
    /// Instrument Key of asset
    /// </summary>
    [RegularExpression("^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$")]
    public required string InstrumentKey { get; init; }
}
