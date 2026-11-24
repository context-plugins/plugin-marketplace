using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the UpdatePipelineVariableForUser operation.
/// </summary>
public sealed record UpdatePipelineVariableForUserRequest
{
    /// <summary>
    /// Either the UUID of the account surrounded by curly-braces, for example <c>{account UUID}</c>, OR an Atlassian Account ID.
    /// </summary>
    public required string SelectedUser { get; init; }

    /// <summary>
    /// The UUID of the variable.
    /// </summary>
    public required string VariableUuid { get; init; }

    /// <summary>
    /// The updated variable.
    /// </summary>
    public required PipelineVariable Body { get; init; }
}
