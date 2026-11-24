using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Cloro.Models;

namespace Cloro.Requests.Async;

/// <summary>
/// The inputs of the CreateBatchAsyncTasks operation.
/// </summary>
public sealed record CreateBatchAsyncTasksRequest
{
    [MinLength(1)]
    [MaxLength(500)]
    public required IReadOnlyList<BatchTaskRequest> Body { get; init; }
}
