using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Requests.Tasksets;

/// <summary>
/// The inputs of the ListTasksetsV2TasksetsGet operation.
/// </summary>
public sealed record ListTasksetsV2TasksetsGetRequest
{
    [Minimum(1)]
    [Maximum(500)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;

    /// <summary>
    /// ILIKE-match on taskset name
    /// </summary>
    public SearchHudPlatformTasksetsApi? Search { get; init; }

    /// <summary>
    /// Only public tasksets; anonymous browsing requires this or featured_only
    /// </summary>
    public bool PublicOnly { get; init; } = false;

    /// <summary>
    /// Only platform-featured tasksets, which are always public
    /// </summary>
    public bool FeaturedOnly { get; init; } = false;

    /// <summary>
    /// Only tasksets owned by the caller's membership; ignored when public_only=True
    /// </summary>
    public bool OwnerOnly { get; init; } = false;

    /// <summary>
    /// Only tasksets with at least this many live tasks
    /// </summary>
    public MinTasks? MinTasks { get; init; }

    /// <summary>
    /// Only tasksets with a live task whose latest version uses a scenario on this registry
    /// </summary>
    public RegistryId2? RegistryId { get; init; }

    /// <summary>
    /// Only tasksets with a live task whose latest version uses this scenario
    /// </summary>
    public ScenarioId? ScenarioId { get; init; }

    /// <summary>
    /// Only tasksets contained by this Project; omitted lists every Project
    /// </summary>
    public ProjectId2? ProjectId { get; init; }

    /// <summary>
    /// Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count DESC), tasks (task_count DESC)
    /// </summary>
    public SortByHudPlatformTasksetsApi SortBy { get; init; } = SortByHudPlatformTasksetsApi.Starred;
}
