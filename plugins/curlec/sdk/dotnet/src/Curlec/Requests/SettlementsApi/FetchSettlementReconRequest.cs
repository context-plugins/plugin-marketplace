using Curlec.Core.Validation.Attributes;

namespace Curlec.Requests.SettlementsApi;

/// <summary>
/// The inputs of the FetchSettlementRecon operation.
/// </summary>
public sealed record FetchSettlementReconRequest
{
    /// <summary>
    /// Settlement year in YYYY format.
    /// </summary>
    public required int Year { get; init; }

    /// <summary>
    /// Settlement month in MM format (01–12).
    /// </summary>
    [Minimum(1)]
    [Maximum(12)]
    public required int Month { get; init; }

    /// <summary>
    /// Settlement day in DD format (1–31). Omit to fetch the full month.
    /// </summary>
    [Minimum(1)]
    [Maximum(31)]
    public int? Day { get; init; }

    /// <summary>
    /// Records per call. Maximum 1000. Default 10.
    /// </summary>
    [Minimum(1)]
    [Maximum(1000)]
    public int Count { get; init; } = 10;

    /// <summary>
    /// Records to skip for pagination.
    /// </summary>
    public int Skip { get; init; } = 0;
}
