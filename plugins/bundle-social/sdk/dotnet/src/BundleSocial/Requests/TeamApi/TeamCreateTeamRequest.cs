using BundleSocial.Models;

namespace BundleSocial.Requests.TeamApi;

/// <summary>
/// The inputs of the TeamCreateTeam operation.
/// </summary>
public sealed record TeamCreateTeamRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1TeamRequest1? Body { get; init; }
}
