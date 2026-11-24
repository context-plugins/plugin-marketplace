using MrScraper.Models;

namespace MrScraper.Requests.Tasks;

/// <summary>
/// The inputs of the PutTasksById operation.
/// </summary>
public sealed record PutTasksByIdRequest
{
    /// <summary>
    /// Task ID
    /// </summary>
    public required int Id { get; init; }

    /// <summary>
    /// Task object
    /// </summary>
    public required TaskTaskSwagger Body { get; init; }
}
