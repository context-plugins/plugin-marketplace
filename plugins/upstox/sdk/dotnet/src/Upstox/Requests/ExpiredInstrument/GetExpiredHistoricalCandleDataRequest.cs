using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.ExpiredInstrument;

/// <summary>
/// The inputs of the GetExpiredHistoricalCandleData operation.
/// </summary>
public sealed record GetExpiredHistoricalCandleDataRequest
{
    /// <summary>
    /// Expired Instrument Key of asset
    /// </summary>
    [RegularExpression("^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM)\\|[\\w\\d\\-]+\\|(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[012])-(\\d{4})$")]
    public required string ExpiredInstrumentKey { get; init; }

    /// <summary>
    /// Interval to get expired ohlc data
    /// </summary>
    [RegularExpression("^(1minute|3minute|5minute|15minute|30minute|day)$")]
    public required string Interval { get; init; }

    /// <summary>
    /// to date
    /// </summary>
    [RegularExpression("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")]
    public required string ToDate { get; init; }

    /// <summary>
    /// from date
    /// </summary>
    [RegularExpression("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")]
    public required string FromDate { get; init; }
}
