using StayingApi.Models.Enums;

namespace StayingApi.Requests.DataApi;

/// <summary>
/// The inputs of the Reviews operation.
/// </summary>
public sealed record ReviewsRequest
{
    /// <summary>
    /// Target platform (must be enabled for reviews).
    /// </summary>
    public required Platform Platform { get; init; }

    /// <summary>
    /// Platform-native id from /v1/search <c>platformListingId</c> (one identification form); a <c>stays_&lt;platform&gt;_&lt;platformListingId&gt;</c> id is accepted, normalized, and may supply platform when platform is omitted.
    /// </summary>
    public string? ListingId { get; init; }

    /// <summary>
    /// Full listing URL (one identification form).
    /// </summary>
    public string? Url { get; init; }

    /// <summary>
    /// 1–100; default 20.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// ISO-639-1 filter.
    /// </summary>
    public string? Language { get; init; }

    /// <summary>
    /// recent | rating_desc | rating_asc.
    /// </summary>
    public string? Sort { get; init; }
}
