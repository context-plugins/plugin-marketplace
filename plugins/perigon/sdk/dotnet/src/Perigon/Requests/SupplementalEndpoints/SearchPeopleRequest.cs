using System.Collections.Generic;
using Perigon.Core.Validation.Attributes;

namespace Perigon.Requests.SupplementalEndpoints;

/// <summary>
/// The inputs of the SearchPeople operation.
/// </summary>
public sealed record SearchPeopleRequest
{
    /// <summary>
    /// String. Search by person's name. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// String Array. Filter by Wikidata entity IDs (e.g., Q7747, Q937). These are unique identifiers from Wikidata.org that precisely identify public figures and eliminate name ambiguity. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? WikidataId { get; init; }

    /// <summary>
    /// String Array. Filter by Wikidata occupation IDs (e.g., Q82955 for politician, Q33999 for actor, Q19546 for businessman). Finds people with specific professions. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? OccupationId { get; init; }

    /// <summary>
    /// String. Search by occupation name (e.g., politician, actor, CEO, athlete). Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? OccupationLabel { get; init; }

    /// <summary>
    /// Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
    /// </summary>
    [Minimum(0)]
    public int? Page { get; init; }

    /// <summary>
    /// Integer. The number of people to return per page in the paginated response.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int? Size { get; init; }
}
