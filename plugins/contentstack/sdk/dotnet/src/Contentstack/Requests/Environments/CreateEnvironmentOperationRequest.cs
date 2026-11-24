using Contentstack.Models;

namespace Contentstack.Requests.Environments;

/// <summary>
/// The inputs of the CreateEnvironment operation.
/// </summary>
public sealed record CreateEnvironmentOperationRequest
{
    /// <summary>
    /// The unique identifier of the Launch project.
    /// </summary>
    public required string ProjectUid { get; init; }

    public required CreateEnvironmentRequest Body { get; init; }
}
