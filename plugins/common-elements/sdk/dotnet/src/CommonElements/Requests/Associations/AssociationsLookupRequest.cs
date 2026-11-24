namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsLookup operation.
/// </summary>
public sealed record AssociationsLookupRequest
{
    /// <summary>
    /// Exact substring of the filed corporate name, case-insensitive. Not fuzzy; for messy names use /associations/match. A street address (with ZIP) is resolved as an address, not as a name.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Two-letter state filter, e.g. "FL".
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// One of "hoa", "condo", "coop".
    /// </summary>
    public string? Subtype { get; init; }

    /// <summary>
    /// County filter, case-insensitive, e.g. "Broward" or "Pima".
    /// </summary>
    public string? County { get; init; }

    /// <summary>
    /// Exact state registry corp/document number (Sunbiz document number, ACC entity id, ...), case-insensitive. Returned as external_document_number.
    /// </summary>
    public string? RegistrationNumber { get; init; }

    /// <summary>
    /// Max results to return (default 20, max 100; free tier is clamped lower).
    /// </summary>
    public double? Limit { get; init; }

    /// <summary>
    /// Pagination offset (default 0).
    /// </summary>
    public double? Offset { get; init; }
}
