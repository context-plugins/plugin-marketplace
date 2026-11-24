namespace Boomi.Requests.Environments;

/// <summary>
/// The inputs of the GetEnvironment operation.
/// </summary>
public sealed record GetEnvironmentRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }
}
