using BundleSocial.Models;

namespace BundleSocial.Requests.TeamApi;

/// <summary>
/// The inputs of the TeamUpdateTeam operation.
/// </summary>
public sealed record TeamUpdateTeamRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1TeamRequest? Body { get; init; }
}
