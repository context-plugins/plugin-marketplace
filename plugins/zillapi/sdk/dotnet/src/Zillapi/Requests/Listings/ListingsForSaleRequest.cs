using Zillapi.Models.AnyOf;

namespace Zillapi.Requests.Listings;

/// <summary>
/// The inputs of the ListingsForSale operation.
/// </summary>
public sealed record ListingsForSaleRequest
{
    public required SearchRequest2 Body { get; init; }
}
