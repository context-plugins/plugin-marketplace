using System.Collections.Generic;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentGetList operation.
/// </summary>
public sealed record CommentGetListRequest
{
    public required string TeamId { get; init; }

    public string? PostId { get; init; }

    public string? ImportedPostId { get; init; }

    public Status4? Status { get; init; }

    public OrderBy? OrderBy { get; init; }

    public Order? Order { get; init; }

    public string? Q { get; init; }

    public IReadOnlyList<Platform6>? Platforms { get; init; }

    public double? Offset { get; init; } = 0d;

    public double? Limit { get; init; } = 10d;
}
