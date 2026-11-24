using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Analytics;

/// <summary>
/// The inputs of the AnalyticsGetBulkPostAnalytics operation.
/// </summary>
public sealed record AnalyticsGetBulkPostAnalyticsRequest
{
    [MinLength(1)]
    [MaxLength(60)]
    public required IReadOnlyList<string> PostIds { get; init; }

    public required PlatformType PlatformType { get; init; }

    [Minimum(1.0)]
    public double Page { get; init; } = 1d;

    [Minimum(1.0)]
    [Maximum(20.0)]
    public double Limit { get; init; } = 20d;
}
