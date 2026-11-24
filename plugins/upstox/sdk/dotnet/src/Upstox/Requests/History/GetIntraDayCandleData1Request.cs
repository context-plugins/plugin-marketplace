using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.History;

/// <summary>
/// The inputs of the GetIntraDayCandleData1 operation.
/// </summary>
public sealed record GetIntraDayCandleData1Request
{
    [RegularExpression("^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$")]
    public required string InstrumentKey { get; init; }

    [RegularExpression("^(1minute|30minute)$")]
    public required string Interval { get; init; }
}
