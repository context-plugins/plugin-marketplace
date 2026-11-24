using MrScraper.Models;

namespace MrScraper.Requests.Tasks;

/// <summary>
/// The inputs of the PostTasks operation.
/// </summary>
public sealed record PostTasksRequest
{
    /// <summary>
    /// Task object (ID will be auto-generated, do not include)
    /// </summary>
    public required TaskTaskSwagger Body { get; init; }
}
