namespace CommonElements.Requests.Vendors;

/// <summary>
/// The inputs of the VendorsList operation.
/// </summary>
public sealed record VendorsListRequest
{
    /// <summary>
    /// Free-text search over name and description.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Two-letter state code. Matches either the vendor's home state or a state it serves.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// A vendor-category slug, matched against the vendor's self-tagged service categories.
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Max results per page. Free keys are capped at 50; paid tiers get a higher cap.
    /// </summary>
    public double? Limit { get; init; }

    /// <summary>
    /// Pagination offset (default 0).
    /// </summary>
    public double? Offset { get; init; }
}
