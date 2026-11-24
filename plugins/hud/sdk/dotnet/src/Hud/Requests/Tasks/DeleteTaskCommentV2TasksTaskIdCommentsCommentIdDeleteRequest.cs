using System;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete operation.
/// </summary>
public sealed record DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest
{
    public required Guid TaskId { get; init; }

    public required Guid CommentId { get; init; }
}
