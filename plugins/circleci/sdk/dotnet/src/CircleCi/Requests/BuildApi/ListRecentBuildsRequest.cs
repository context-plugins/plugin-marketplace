using CircleCi.Core.Validation.Attributes;

namespace CircleCi.Requests.BuildApi;

/// <summary>
/// The inputs of the ListRecentBuilds operation.
/// </summary>
public sealed record ListRecentBuildsRequest
{
    /// <summary>
    /// Number of builds to return (max 100)
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 30;

    /// <summary>
    /// Offset for pagination
    /// </summary>
    [Minimum(0)]
    public int? Offset { get; init; }
}
