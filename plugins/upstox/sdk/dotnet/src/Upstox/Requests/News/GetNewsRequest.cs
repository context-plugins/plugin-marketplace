using Upstox.Core.Validation.Attributes;

namespace Upstox.Requests.News;

/// <summary>
/// The inputs of the GetNews operation.
/// </summary>
public sealed record GetNewsRequest
{
    /// <summary>
    /// Category of news to fetch. Allowed values: instrument_keys, positions, holdings
    /// </summary>
    public required string Category { get; init; }

    /// <summary>
    /// Comma-separated list of instrument keys. Required when category is instrument_keys.
    /// </summary>
    public string? InstrumentKeys { get; init; }

    /// <summary>
    /// Page number for pagination
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PageNumber { get; init; } = 1;

    /// <summary>
    /// Number of records per page
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PageSize { get; init; } = 100;
}
