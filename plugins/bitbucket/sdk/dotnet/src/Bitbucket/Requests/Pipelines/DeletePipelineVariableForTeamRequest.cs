namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the DeletePipelineVariableForTeam operation.
/// </summary>
public sealed record DeletePipelineVariableForTeamRequest
{
    /// <summary>
    /// The account.
    /// </summary>
    public required string Username { get; init; }

    /// <summary>
    /// The UUID of the variable to delete.
    /// </summary>
    public required string VariableUuid { get; init; }
}
