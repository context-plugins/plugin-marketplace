using System.Collections.Generic;

namespace RocketReach.Requests.PeopleDataApi;

/// <summary>
/// The inputs of the CheckUniversalPersonLookupStatus operation.
/// </summary>
public sealed record CheckUniversalPersonLookupStatusRequest
{
    /// <summary>
    /// List of Profile IDs
    /// </summary>
    public IReadOnlyList<int>? Ids { get; init; }
}
