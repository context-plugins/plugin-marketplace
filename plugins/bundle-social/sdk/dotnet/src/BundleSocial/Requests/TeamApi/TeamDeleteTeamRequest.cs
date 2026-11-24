namespace BundleSocial.Requests.TeamApi;

/// <summary>
/// The inputs of the TeamDeleteTeam operation.
/// </summary>
public sealed record TeamDeleteTeamRequest
{
    public required string Id { get; init; }
}
