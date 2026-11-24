using System;
using Hud.Models;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the CreateTaskCommentV2TasksTaskIdCommentsPost operation.
/// </summary>
public sealed record CreateTaskCommentV2TasksTaskIdCommentsPostRequest
{
    public required Guid TaskId { get; init; }

    public required CreateTaskCommentRequest Body { get; init; }
}
