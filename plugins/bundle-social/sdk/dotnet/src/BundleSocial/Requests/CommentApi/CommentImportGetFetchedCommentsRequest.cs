using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentImportGetFetchedComments operation.
/// </summary>
public sealed record CommentImportGetFetchedCommentsRequest
{
    public required string TeamId { get; init; }

    public string? PostId { get; init; }

    public string? ImportedPostId { get; init; }

    public PlatformBundleSocialCommentApi? Platform { get; init; }

    public string? SocialAccountId { get; init; }

    public double? Offset { get; init; } = 0d;

    public double? Limit { get; init; } = 10d;
}
