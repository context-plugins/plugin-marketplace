namespace Boomi.Requests.Environments;

/// <summary>
/// The inputs of the DeleteEnvironment operation.
/// </summary>
public sealed record DeleteEnvironmentRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }
}
