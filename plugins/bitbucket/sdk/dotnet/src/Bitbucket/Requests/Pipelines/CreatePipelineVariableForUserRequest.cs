using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the CreatePipelineVariableForUser operation.
/// </summary>
public sealed record CreatePipelineVariableForUserRequest
{
    /// <summary>
    /// Either the UUID of the account surrounded by curly-braces, for example <c>{account UUID}</c>, OR an Atlassian Account ID.
    /// </summary>
    public required string SelectedUser { get; init; }

    /// <summary>
    /// The variable to create.
    /// </summary>
    public PipelineVariable? Body { get; init; }
}
