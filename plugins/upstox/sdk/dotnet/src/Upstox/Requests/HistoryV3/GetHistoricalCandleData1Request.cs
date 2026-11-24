using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.HistoryV3;

/// <summary>
/// The inputs of the GetHistoricalCandleData1 operation.
/// </summary>
public sealed record GetHistoricalCandleData1Request
{
    [RegularExpression("^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$")]
    public required string InstrumentKey { get; init; }

    [RegularExpression("^(minutes|hours|days|weeks|months)$")]
    public required string Unit { get; init; }

    public required int Interval { get; init; }

    [RegularExpression("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")]
    public required string ToDate { get; init; }

    public required string FromDate { get; init; }
}
