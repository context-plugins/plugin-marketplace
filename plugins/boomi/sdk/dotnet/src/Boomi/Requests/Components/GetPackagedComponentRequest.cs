namespace Boomi.Requests.Components;

/// <summary>
/// The inputs of the GetPackagedComponent operation.
/// </summary>
public sealed record GetPackagedComponentRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }
}
