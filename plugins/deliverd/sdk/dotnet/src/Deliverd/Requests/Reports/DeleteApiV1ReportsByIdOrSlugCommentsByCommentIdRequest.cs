using System;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the DeleteApiV1ReportsByIdOrSlugCommentsByCommentId operation.
/// </summary>
public sealed record DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest
{
    public required string IdOrSlug { get; init; }

    public required Guid CommentId { get; init; }
}
