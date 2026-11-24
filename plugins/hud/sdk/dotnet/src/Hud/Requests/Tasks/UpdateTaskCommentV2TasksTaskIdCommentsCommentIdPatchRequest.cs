using System;
using Hud.Models;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatch operation.
/// </summary>
public sealed record UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest
{
    public required Guid TaskId { get; init; }

    public required Guid CommentId { get; init; }

    public required UpdateTaskCommentRequest Body { get; init; }
}
