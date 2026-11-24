using MrScraper.Models;

namespace MrScraper.Requests.Tasks;

/// <summary>
/// The inputs of the PutTasksBulk operation.
/// </summary>
public sealed record PutTasksBulkRequest
{
    /// <summary>
    /// Array of tasks to update; each task must include its ID
    /// </summary>
    public required TaskBatchUpdateRequest Body { get; init; }
}
