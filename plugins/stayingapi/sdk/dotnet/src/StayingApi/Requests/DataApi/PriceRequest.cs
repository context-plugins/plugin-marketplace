using StayingApi.Models.Enums;

namespace StayingApi.Requests.DataApi;

/// <summary>
/// The inputs of the Price operation.
/// </summary>
public sealed record PriceRequest
{
    /// <summary>
    /// Target platform (must be enabled for price).
    /// </summary>
    public required Platform Platform { get; init; }

    /// <summary>
    /// Platform listing id.
    /// </summary>
    public required string ListingId { get; init; }

    /// <summary>
    /// YYYY-MM-DD (required).
    /// </summary>
    public required string CheckIn { get; init; }

    /// <summary>
    /// YYYY-MM-DD (required).
    /// </summary>
    public required string CheckOut { get; init; }

    /// <summary>
    /// ISO-4217; default USD.
    /// </summary>
    public string? Currency { get; init; }
}
