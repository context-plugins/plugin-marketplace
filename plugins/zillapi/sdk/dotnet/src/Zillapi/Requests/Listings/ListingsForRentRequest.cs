using Zillapi.Models.AnyOf;

namespace Zillapi.Requests.Listings;

/// <summary>
/// The inputs of the ListingsForRent operation.
/// </summary>
public sealed record ListingsForRentRequest
{
    public required SearchRequest2 Body { get; init; }
}
