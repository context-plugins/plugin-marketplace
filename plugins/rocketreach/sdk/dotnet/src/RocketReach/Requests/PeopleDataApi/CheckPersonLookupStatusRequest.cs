using System.Collections.Generic;

namespace RocketReach.Requests.PeopleDataApi;

/// <summary>
/// The inputs of the CheckPersonLookupStatus operation.
/// </summary>
public sealed record CheckPersonLookupStatusRequest
{
    /// <summary>
    /// List of Profile IDs
    /// </summary>
    public IReadOnlyList<int>? Ids { get; init; }
}
