namespace Skribble.Requests.BillingAndCredits;

/// <summary>
/// The inputs of the GetBillingCreditsInvoiced operation.
/// </summary>
public sealed record GetBillingCreditsInvoicedRequest
{
    /// <summary>
    /// Format YYYY, YYYYMM, YYYYMMDD is supported. If not specified the last
    /// invoiced period is used by default
    /// </summary>
    public string? Period { get; init; }
}
