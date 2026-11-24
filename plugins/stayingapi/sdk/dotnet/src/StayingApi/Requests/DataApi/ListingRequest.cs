using StayingApi.Models.Enums;

namespace StayingApi.Requests.DataApi;

/// <summary>
/// The inputs of the Listing operation.
/// </summary>
public sealed record ListingRequest
{
    public required Platform Platform { get; init; }

    public required string Id { get; init; }

    /// <summary>
    /// ISO-3166 alpha-2 country hint (booking). Disambiguates a bare booking.com slug (slugs are not globally unique) without the %2F-encoded /hotel/{cc}/{slug} id — e.g. /v1/listing/booking/casa-de-alba?country=co. A bare booking slug with no country returns 400 needs_country.
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// YYYY-MM-DD.
    /// </summary>
    public string? CheckIn { get; init; }

    /// <summary>
    /// YYYY-MM-DD.
    /// </summary>
    public string? CheckOut { get; init; }

    /// <summary>
    /// ISO-4217; default USD.
    /// </summary>
    public string? Currency { get; init; }
}
