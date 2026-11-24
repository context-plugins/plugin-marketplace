namespace BundleSocial.Requests.TeamApi;

/// <summary>
/// The inputs of the TeamGetTeam operation.
/// </summary>
public sealed record TeamGetTeamRequest
{
    public required string Id { get; init; }
}
