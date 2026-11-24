namespace Curlec.Requests.XPayouts;

/// <summary>
/// The inputs of the ListPayouts operation.
/// </summary>
public sealed record ListPayoutsRequest
{
    /// <summary>
    /// The RazorpayX account number (Customer Identifier from Dashboard → My Account &amp; Settings → Banking). Required to scope results to a specific account.
    /// </summary>
    public required string AccountNumber { get; init; }

    /// <summary>
    /// Filter payouts by the contact ID of the recipient.
    /// </summary>
    public string? ContactId { get; init; }

    /// <summary>
    /// Filter payouts by fund account ID.
    /// </summary>
    public string? FundAccountId { get; init; }

    /// <summary>
    /// Unix timestamp. Only payouts created from this timestamp onwards are returned.
    /// </summary>
    public int? From { get; init; }

    /// <summary>
    /// Unix timestamp. Only payouts created before this timestamp are returned.
    /// </summary>
    public int? To { get; init; }

    /// <summary>
    /// Number of payouts to return. Default: 10. Maximum: 100.
    /// </summary>
    public int Count { get; init; } = 25;

    /// <summary>
    /// Number of payouts to skip. Use for pagination. Default: 0.
    /// </summary>
    public int Skip { get; init; } = 0;
}
