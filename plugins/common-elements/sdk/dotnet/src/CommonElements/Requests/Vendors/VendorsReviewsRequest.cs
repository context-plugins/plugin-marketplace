using System;

namespace CommonElements.Requests.Vendors;

/// <summary>
/// The inputs of the VendorsReviews operation.
/// </summary>
public sealed record VendorsReviewsRequest
{
    /// <summary>
    /// Vendor organization id.
    /// </summary>
    public required Guid Id { get; init; }

    /// <summary>
    /// Max results, 1 to 100 (default 25).
    /// </summary>
    public double? Limit { get; init; }

    /// <summary>
    /// Pagination offset (default 0).
    /// </summary>
    public double? Offset { get; init; }
}
