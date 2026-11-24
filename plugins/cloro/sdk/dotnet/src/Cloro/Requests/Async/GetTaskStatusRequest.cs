using System;

namespace Cloro.Requests.Async;

/// <summary>
/// The inputs of the GetTaskStatus operation.
/// </summary>
public sealed record GetTaskStatusRequest
{
    /// <summary>
    /// The ID of the task to fetch.
    /// </summary>
    public required Guid TaskId { get; init; }
}
