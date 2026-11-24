using Zillapi.Models.AnyOf;

namespace Zillapi.Requests.Listings;

/// <summary>
/// The inputs of the ListingsSold operation.
/// </summary>
public sealed record ListingsSoldRequest
{
    public required SearchRequest2 Body { get; init; }
}
