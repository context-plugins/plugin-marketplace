namespace DoiT.Requests.Assets;

/// <summary>
/// The inputs of the IdOfAssets operation.
/// </summary>
public sealed record IdOfAssetsRequest
{
    /// <summary>
    /// The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.
    /// </summary>
    public long MaxResults { get; init; } = 50L;

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// An expression for filtering the results of the request. The syntax
    /// is <c>key:[&lt;value&gt;]</c>. e.g: "type:g-suite". Multiple filters can be
    /// connected using a pipe |. Note that using different keys in the same
    /// filter results in “AND,” while using the same key multiple times in
    /// the same filter results in “OR”.
    /// </summary>
    public string? Filter { get; init; }
}
