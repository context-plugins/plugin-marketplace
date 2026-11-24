using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Requests.Analytics;

/// <summary>
/// The inputs of the GetApiV1Analytics operation.
/// </summary>
public sealed record GetApiV1AnalyticsRequest
{
    /// <summary>
    /// The window to count over. 30 by default.
    /// </summary>
    [Minimum(1)]
    [Maximum(365)]
    public int? Days { get; init; }

    /// <summary>
    /// How many reports in each list. 10 by default.
    /// </summary>
    [Minimum(1)]
    [Maximum(50)]
    public int? Limit { get; init; }
}
