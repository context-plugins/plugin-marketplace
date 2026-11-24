using System;
using Deliverd.Models;

namespace Deliverd.Requests.Comments;

/// <summary>
/// The inputs of the PostApiV1CommentsByThreadIdResolve operation.
/// </summary>
public sealed record PostApiV1CommentsByThreadIdResolveRequest
{
    public required Guid ThreadId { get; init; }

    public ApiV1CommentsResolveRequest? Body { get; init; }
}
