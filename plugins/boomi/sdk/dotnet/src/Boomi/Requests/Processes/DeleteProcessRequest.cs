namespace Boomi.Requests.Processes;

/// <summary>
/// The inputs of the DeleteProcess operation.
/// </summary>
public sealed record DeleteProcessRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }
}
