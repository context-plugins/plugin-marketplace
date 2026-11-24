namespace CallNode.Requests.Wholesale;

/// <summary>
/// The inputs of the ListWholesaleAreas operation.
/// </summary>
public sealed record ListWholesaleAreasRequest
{
    public string? CountryId { get; init; }

    public string? StateId { get; init; }
}
