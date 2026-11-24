using System;
using System.Collections.Generic;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.PostApi;

/// <summary>
/// The inputs of the PostGetList operation.
/// </summary>
public sealed record PostGetListRequest
{
    public required string TeamId { get; init; }

    public Status? Status { get; init; }

    public OrderByBundleSocialPostApi? OrderBy { get; init; }

    public Order? Order { get; init; }

    public string? Q { get; init; }

    public IReadOnlyList<PlatformBundleSocialPostApi>? Platforms { get; init; }

    public DateTimeOffset? PostDateFrom { get; init; }

    public DateTimeOffset? PostDateTo { get; init; }

    public double? Offset { get; init; } = 0d;

    public double? Limit { get; init; } = 10d;
}
