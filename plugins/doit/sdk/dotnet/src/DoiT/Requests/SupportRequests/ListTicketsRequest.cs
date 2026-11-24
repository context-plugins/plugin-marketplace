using DoiT.Core.Validation.Attributes;

namespace DoiT.Requests.SupportRequests;

/// <summary>
/// The inputs of the ListTickets operation.
/// </summary>
public sealed record ListTicketsRequest
{
    /// <summary>
    /// The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public long MaxResults { get; init; } = 100L;

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// An expression for filtering the results of the request. The syntax is <c>key:[&lt;value&gt;]</c>. e.g: "severity:normal". Multiple filters can be
    /// connected using a pipe |. Note that using different keys in the same
    /// filter results in “AND,” while using the same key multiple times in
    /// the same filter results in “OR”.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Min value for tickets creation time, in milliseconds since the POSIX epoch. If set, only tickets created after or at this timestamp are returned.
    /// </summary>
    public string? MinCreationTime { get; init; }

    /// <summary>
    /// Max value for tickets creation time, in milliseconds since the POSIX epoch. If set, only tickets created before or at this timestamp are returned.
    /// </summary>
    public string? MaxCreationTime { get; init; }
}
