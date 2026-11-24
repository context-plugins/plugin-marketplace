namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the GetPipelineVariablesForTeam operation.
/// </summary>
public sealed record GetPipelineVariablesForTeamRequest
{
    /// <summary>
    /// The account.
    /// </summary>
    public required string Username { get; init; }
}
