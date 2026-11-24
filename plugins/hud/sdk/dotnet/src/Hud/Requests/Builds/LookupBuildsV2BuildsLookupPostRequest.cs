using Hud.Models;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the LookupBuildsV2BuildsLookupPost operation.
/// </summary>
public sealed record LookupBuildsV2BuildsLookupPostRequest
{
    public required BuildLookupRequest Body { get; init; }
}
