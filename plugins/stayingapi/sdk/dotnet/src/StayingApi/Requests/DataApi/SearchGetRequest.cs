namespace StayingApi.Requests.DataApi;

/// <summary>
/// The inputs of the SearchGet operation.
/// </summary>
public sealed record SearchGetRequest
{
    /// <summary>
    /// Destination (city, region, address).
    /// </summary>
    public required string Location { get; init; }

    /// <summary>
    /// YYYY-MM-DD.
    /// </summary>
    public string? CheckIn { get; init; }

    /// <summary>
    /// YYYY-MM-DD.
    /// </summary>
    public string? CheckOut { get; init; }

    /// <summary>
    /// Comma-separated platforms; defaults to all enabled. <c>limit</c> applies per platform.
    /// </summary>
    public string? Platforms { get; init; }

    /// <summary>
    /// Alias for <c>platforms=&lt;value&gt;</c> when requesting exactly one platform.
    /// </summary>
    public string? Platform { get; init; }

    /// <summary>
    /// Default 2.
    /// </summary>
    public int? Adults { get; init; }

    /// <summary>
    /// Default 0; requires matching childAges.
    /// </summary>
    public int? Children { get; init; }

    /// <summary>
    /// Default 1.
    /// </summary>
    public int? Rooms { get; init; }

    /// <summary>
    /// ISO-4217; default USD.
    /// </summary>
    public string? Currency { get; init; }

    /// <summary>
    /// 1–40; default 10. Applies per platform: a 3-platform search with limit=5 returns up to 15 results.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// recommended | price_asc | price_desc | rating_desc.
    /// </summary>
    public string? Sort { get; init; }
}
