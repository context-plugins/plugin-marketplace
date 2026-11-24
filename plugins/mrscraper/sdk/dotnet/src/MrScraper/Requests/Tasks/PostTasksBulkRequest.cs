using MrScraper.Models;

namespace MrScraper.Requests.Tasks;

/// <summary>
/// The inputs of the PostTasksBulk operation.
/// </summary>
public sealed record PostTasksBulkRequest
{
    /// <summary>
    /// Array of tasks to create
    /// </summary>
    public required TaskBatchCreateRequest Body { get; init; }
}
