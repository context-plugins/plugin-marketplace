using Contentstack.Models;

namespace Contentstack.Requests.Environments;

/// <summary>
/// The inputs of the UpdateEnvironment operation.
/// </summary>
public sealed record UpdateEnvironmentRequest
{
    /// <summary>
    /// The unique identifier of the Launch project.
    /// </summary>
    public required string ProjectUid { get; init; }

    /// <summary>
    /// The unique identifier of the deployment environment.
    /// </summary>
    public required string EnvUid { get; init; }

    public required CreateEnvironmentRequest Body { get; init; }
}
