namespace DoiT.Requests.Invoices;

/// <summary>
/// The inputs of the ListInvoices operation.
/// </summary>
public sealed record ListInvoicesRequest
{
    /// <summary>
    /// The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.
    /// </summary>
    public long MaxResults { get; init; } = 50L;

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }

    public string? Filter { get; init; }

    /// <summary>
    /// Min value for the invoice creation time, in milliseconds since the POSIX epoch. If set, only invoices created after or at this timestamp are returned.
    /// </summary>
    public long? MinCreationTime { get; init; }

    /// <summary>
    /// Max value for the invoice creation time, in milliseconds since the POSIX epoch. If set, only invoices created before or at this timestamp are returned.
    /// </summary>
    public long? MaxCreationTime { get; init; }
}
