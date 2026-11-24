using StayingApi.Models.Enums;

namespace StayingApi.Requests.DataApi;

/// <summary>
/// The inputs of the Availability operation.
/// </summary>
public sealed record AvailabilityRequest
{
    /// <summary>
    /// Target platform (must be enabled for availability).
    /// </summary>
    public required Platform Platform { get; init; }

    /// <summary>
    /// YYYY-MM-DD (required).
    /// </summary>
    public required string StartDate { get; init; }

    /// <summary>
    /// YYYY-MM-DD (required).
    /// </summary>
    public required string EndDate { get; init; }

    /// <summary>
    /// Platform listing id (one identification form).
    /// </summary>
    public string? ListingId { get; init; }

    /// <summary>
    /// Comma-separated listing ids (one identification form).
    /// </summary>
    public string? ListingIds { get; init; }

    /// <summary>
    /// Full listing URL for the platform (one identification form).
    /// </summary>
    public string? Url { get; init; }

    /// <summary>
    /// Only return available dates.
    /// </summary>
    public bool? OnlyAvailable { get; init; }
}
