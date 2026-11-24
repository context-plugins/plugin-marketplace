using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the CreatePipelineVariableForWorkspace operation.
/// </summary>
public sealed record CreatePipelineVariableForWorkspaceRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The variable to create.
    /// </summary>
    public PipelineVariable? Body { get; init; }
}
