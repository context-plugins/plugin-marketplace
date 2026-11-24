namespace CallNode.Requests.Wholesale;

/// <summary>
/// The inputs of the ListWholesaleStates operation.
/// </summary>
public sealed record ListWholesaleStatesRequest
{
    /// <summary>
    /// From <c>/wholesale/countries</c>. Defaults to the US when omitted.
    /// </summary>
    public string? CountryId { get; init; }
}
