using Lusha.Models;

namespace Lusha.Requests.ContactFiltersApi;

/// <summary>
/// The inputs of the SearchContactLocations operation.
/// </summary>
public sealed record SearchContactLocationsRequest
{
    public required LocationSearchRequest Body { get; init; }
}
