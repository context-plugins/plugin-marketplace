namespace Boomi.Requests.Processes;

/// <summary>
/// The inputs of the GetProcess operation.
/// </summary>
public sealed record GetProcessRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }
}
