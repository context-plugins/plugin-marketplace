using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.TradeProfitAndLoss;

/// <summary>
/// The inputs of the GetProfitAndLossCharges operation.
/// </summary>
public sealed record GetProfitAndLossChargesRequest
{
    /// <summary>
    /// Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives
    /// </summary>
    public required string Segment { get; init; }

    /// <summary>
    /// Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122
    /// </summary>
    [RegularExpression("^(0|[1-9][0-9]*)$")]
    public required string FinancialYear { get; init; }

    /// <summary>
    /// Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
    /// </summary>
    public string? FromDate { get; init; }

    /// <summary>
    /// Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
    /// </summary>
    public string? ToDate { get; init; }
}
