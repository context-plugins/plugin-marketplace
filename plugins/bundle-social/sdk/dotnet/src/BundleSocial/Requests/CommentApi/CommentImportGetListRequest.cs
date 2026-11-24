using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentImportGetList operation.
/// </summary>
public sealed record CommentImportGetListRequest
{
    public required string TeamId { get; init; }

    public string? PostId { get; init; }

    public string? ImportedPostId { get; init; }

    public StatusBundleSocialCommentApi? Status { get; init; }

    public double? Offset { get; init; } = 0d;

    public double? Limit { get; init; } = 10d;
}
