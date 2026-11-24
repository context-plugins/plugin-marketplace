namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the GetPipelineVariableForTeam operation.
/// </summary>
public sealed record GetPipelineVariableForTeamRequest
{
    /// <summary>
    /// The account.
    /// </summary>
    public required string Username { get; init; }

    /// <summary>
    /// The UUID of the variable to retrieve.
    /// </summary>
    public required string VariableUuid { get; init; }
}
