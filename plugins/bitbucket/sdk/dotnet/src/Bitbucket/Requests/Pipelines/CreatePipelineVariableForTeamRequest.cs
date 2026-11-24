using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the CreatePipelineVariableForTeam operation.
/// </summary>
public sealed record CreatePipelineVariableForTeamRequest
{
    /// <summary>
    /// The account.
    /// </summary>
    public required string Username { get; init; }

    /// <summary>
    /// The variable to create.
    /// </summary>
    public PipelineVariable? Body { get; init; }
}
