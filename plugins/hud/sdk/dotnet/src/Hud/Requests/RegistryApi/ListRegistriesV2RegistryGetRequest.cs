using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Requests.RegistryApi;

/// <summary>
/// The inputs of the ListRegistriesV2RegistryGet operation.
/// </summary>
public sealed record ListRegistriesV2RegistryGetRequest
{
    [Minimum(1)]
    [Maximum(500)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;

    /// <summary>
    /// ILIKE-match on name
    /// </summary>
    public SearchHudPlatformRegistryApi? Search { get; init; }

    /// <summary>
    /// When search is set, also match environment description and latest-build template name, description, and setup_description
    /// </summary>
    public bool MatchTemplates { get; init; } = false;

    /// <summary>
    /// Embed latest-build templates on each list row
    /// </summary>
    public bool IncludeLatestScenarios { get; init; } = false;

    /// <summary>
    /// Only public registries; anonymous browsing requires this or featured_only
    /// </summary>
    public bool PublicOnly { get; init; } = false;

    /// <summary>
    /// Only platform-featured registries, which are always public
    /// </summary>
    public bool FeaturedOnly { get; init; } = false;

    /// <summary>
    /// Only registries owned by the caller's membership; ignored when public_only=True
    /// </summary>
    public bool OwnerOnly { get; init; } = false;

    /// <summary>
    /// Only registries contained by this Project; omitted lists every Project
    /// </summary>
    public ProjectId1? ProjectId { get; init; }

    /// <summary>
    /// Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count DESC)
    /// </summary>
    public SortBy SortBy { get; init; } = SortBy.Starred;
}
