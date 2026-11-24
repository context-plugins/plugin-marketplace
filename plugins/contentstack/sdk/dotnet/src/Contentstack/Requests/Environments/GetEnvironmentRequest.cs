namespace Contentstack.Requests.Environments;

/// <summary>
/// The inputs of the GetEnvironment operation.
/// </summary>
public sealed record GetEnvironmentRequest
{
    /// <summary>
    /// The unique identifier of the Launch project.
    /// </summary>
    public required string ProjectUid { get; init; }

    /// <summary>
    /// The unique identifier of the deployment environment.
    /// </summary>
    public required string EnvUid { get; init; }
}
