using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Fundamentals;

/// <summary>
/// The inputs of the GetCompetitors operation.
/// </summary>
public sealed record GetCompetitorsRequest
{
    /// <summary>
    /// Instrument key of the company
    /// </summary>
    [RegularExpression("^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$")]
    public required string InstrumentKey { get; init; }
}
