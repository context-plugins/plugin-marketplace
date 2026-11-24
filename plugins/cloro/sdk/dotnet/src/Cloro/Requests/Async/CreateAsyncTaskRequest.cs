using Cloro.Models;

namespace Cloro.Requests.Async;

/// <summary>
/// The inputs of the CreateAsyncTask operation.
/// </summary>
public sealed record CreateAsyncTaskRequest
{
    public required BatchTaskRequest Body { get; init; }
}
