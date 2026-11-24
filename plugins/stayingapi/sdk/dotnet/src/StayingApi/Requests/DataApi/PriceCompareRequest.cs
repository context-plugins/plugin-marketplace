namespace StayingApi.Requests.DataApi;

/// <summary>
/// The inputs of the PriceCompare operation.
/// </summary>
public sealed record PriceCompareRequest
{
    /// <summary>
    /// YYYY-MM-DD (required).
    /// </summary>
    public required string CheckIn { get; init; }

    /// <summary>
    /// YYYY-MM-DD (required).
    /// </summary>
    public required string CheckOut { get; init; }

    /// <summary>
    /// DIRECT MODE. 2–6 comma-separated (or repeated) platform:listingId pairs for the same property, e.g. listings=airbnb:12345,booking:co/casa-de-alba,vrbo:987654. Split on the FIRST colon, so a full listing URL works as the id. Mutually exclusive with name/location/googleHotelId. An id containing a comma must be sent as a repeated param.
    /// </summary>
    public string? Listings { get; init; }

    /// <summary>
    /// GOOGLE MODE. Property name (one of name/location/googleHotelId).
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// GOOGLE MODE. Location hint (one of name/location/googleHotelId).
    /// </summary>
    public string? Location { get; init; }

    /// <summary>
    /// GOOGLE MODE. Google hotel id (mutually exclusive with name/location).
    /// </summary>
    public string? GoogleHotelId { get; init; }

    /// <summary>
    /// Default 2.
    /// </summary>
    public int? Adults { get; init; }

    /// <summary>
    /// Default 0.
    /// </summary>
    public int? Children { get; init; }

    /// <summary>
    /// ISO-4217; default USD.
    /// </summary>
    public string? Currency { get; init; }
}
