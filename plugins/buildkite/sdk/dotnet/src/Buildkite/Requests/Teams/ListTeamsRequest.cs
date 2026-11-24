namespace Buildkite.Requests.Teams;

/// <summary>
/// The inputs of the ListTeams operation.
/// </summary>
public sealed record ListTeamsRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }
}
