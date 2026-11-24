namespace Curlec.Requests.XPayoutLinks;

/// <summary>
/// The inputs of the ListPayoutLinks operation.
/// </summary>
public sealed record ListPayoutLinksRequest
{
    /// <summary>
    /// Filter payout links by the contact ID of the recipient.
    /// </summary>
    public string? ContactId { get; init; }

    /// <summary>
    /// Unix timestamp. Only payout links created from this timestamp onwards are returned.
    /// </summary>
    public int? From { get; init; }

    /// <summary>
    /// Unix timestamp. Only payout links created before this timestamp are returned.
    /// </summary>
    public int? To { get; init; }

    /// <summary>
    /// Number of payout links to return. Default: 10.
    /// </summary>
    public int Count { get; init; } = 10;

    /// <summary>
    /// Number of payout links to skip. Use for pagination. Default: 0.
    /// </summary>
    public int Skip { get; init; } = 0;
}
