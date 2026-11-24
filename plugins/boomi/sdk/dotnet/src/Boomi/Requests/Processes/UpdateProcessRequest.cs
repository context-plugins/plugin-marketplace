using Boomi.Models;

namespace Boomi.Requests.Processes;

/// <summary>
/// The inputs of the UpdateProcess operation.
/// </summary>
public sealed record UpdateProcessRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }

    public required ProcessInput Body { get; init; }
}
