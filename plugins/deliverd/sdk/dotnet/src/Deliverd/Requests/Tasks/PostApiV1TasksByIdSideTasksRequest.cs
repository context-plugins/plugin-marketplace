using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdSideTasks operation.
/// </summary>
public sealed record PostApiV1TasksByIdSideTasksRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksSideTasksRequest? Body { get; init; }
}
