using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.Videos;

/// <summary>
/// The inputs of the UploadPageVideo operation.
/// </summary>
public sealed record UploadPageVideoRequest
{
    /// <summary>
    /// The ID of the Facebook Page
    /// </summary>
    public required string PageId { get; init; }

    public required VideosRequest Body { get; init; }
}
