using System;
using System.Collections.Generic;
using AppstoreSpy.Core.Validation.Attributes;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetPlayRankingsPlayRankingsGet operation.
/// </summary>
public sealed record GetPlayRankingsPlayRankingsGetRequest
{
    /// <summary>
    /// Start date (YYYY-MM-DD)
    /// </summary>
    public DateTimeOffset? DateStart { get; init; }

    /// <summary>
    /// End date (YYYY-MM-DD)
    /// </summary>
    public DateTimeOffset? DateEnd { get; init; }

    /// <summary>
    /// App IDs (comma-separated)
    /// </summary>
    public IReadOnlyList<string>? App { get; init; }

    /// <summary>
    /// Country codes (comma-separated)
    /// </summary>
    public IReadOnlyList<AppCountries>? Country { get; init; }

    /// <summary>
    /// App categories (comma-separated)
    /// </summary>
    public IReadOnlyList<PlayCategory>? Category { get; init; }

    /// <summary>
    /// Collection types (comma-separated)
    /// </summary>
    public IReadOnlyList<Collection>? Collection { get; init; }

    /// <summary>
    /// Minimum rank
    /// </summary>
    [Minimum(1)]
    public int? RankStart { get; init; }

    /// <summary>
    /// Maximum rank
    /// </summary>
    [Maximum(10000)]
    public int? RankEnd { get; init; }

    /// <summary>
    /// Count per page
    /// </summary>
    [Maximum(1000)]
    public int Limit { get; init; } = 10;

    /// <summary>
    /// Page
    /// </summary>
    public int Page { get; init; } = 1;
}
