using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the UpdateRepositoryPipelineKeyPair operation.
/// </summary>
public sealed record UpdateRepositoryPipelineKeyPairRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// The created or updated SSH key pair.
    /// </summary>
    public required PipelineSshKeyPair Body { get; init; }
}
