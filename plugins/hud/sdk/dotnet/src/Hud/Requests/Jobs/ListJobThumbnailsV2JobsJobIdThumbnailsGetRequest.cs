using System;
using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the ListJobThumbnailsV2JobsJobIdThumbnailsGet operation.
/// </summary>
public sealed record ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest
{
    public required Guid JobId { get; init; }

    [Minimum(1)]
    [Maximum(1000)]
    public int Limit { get; init; } = 100;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;

    /// <summary>
    /// Only traces in these statuses; the category counts cover the same traces.
    /// </summary>
    public Status11? Status { get; init; }
}
