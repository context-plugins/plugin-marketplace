using MrScraper.Models;

namespace MrScraper.Requests.Tasks;

/// <summary>
/// The inputs of the PutTasksByIdStatus operation.
/// </summary>
public sealed record PutTasksByIdStatusRequest
{
    /// <summary>
    /// Task ID
    /// </summary>
    public required int Id { get; init; }

    /// <summary>
    /// Task status update object
    /// </summary>
    public required TaskUpdateTaskStatusRequest Body { get; init; }
}
