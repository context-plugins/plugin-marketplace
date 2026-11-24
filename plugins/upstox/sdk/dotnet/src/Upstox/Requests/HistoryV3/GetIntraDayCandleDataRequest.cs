using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.HistoryV3;

/// <summary>
/// The inputs of the GetIntraDayCandleData operation.
/// </summary>
public sealed record GetIntraDayCandleDataRequest
{
    [RegularExpression("^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$")]
    public required string InstrumentKey { get; init; }

    [RegularExpression("^(minutes|hours|days)$")]
    public required string Unit { get; init; }

    public required int Interval { get; init; }
}
