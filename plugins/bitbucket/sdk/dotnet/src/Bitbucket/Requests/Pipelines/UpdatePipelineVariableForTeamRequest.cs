using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the UpdatePipelineVariableForTeam operation.
/// </summary>
public sealed record UpdatePipelineVariableForTeamRequest
{
    /// <summary>
    /// The account.
    /// </summary>
    public required string Username { get; init; }

    /// <summary>
    /// The UUID of the variable.
    /// </summary>
    public required string VariableUuid { get; init; }

    /// <summary>
    /// The updated variable.
    /// </summary>
    public required PipelineVariable Body { get; init; }
}
