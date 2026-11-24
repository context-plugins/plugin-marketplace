using Zillapi.Core.Validation.Attributes;
using Zillapi.Models.Enums;

namespace Zillapi.Requests.Listings;

/// <summary>
/// The inputs of the ListingsBbox operation.
/// </summary>
public sealed record ListingsBboxRequest
{
    /// <summary>
    /// REQUIRED bounding box as <c>west,south,east,north</c> (decimal degrees, comma-separated). A free-text location alone is not accepted and returns 400 missing_input; the search engine needs a real bounding box.
    /// </summary>
    public required string Bbox { get; init; }

    /// <summary>
    /// Listing status preset.
    /// </summary>
    public Status1 Status { get; init; } = Status1.ForSale;

    /// <summary>
    /// Minimum price in dollars.
    /// </summary>
    public int? PriceMin { get; init; }

    /// <summary>
    /// Maximum price in dollars.
    /// </summary>
    public int? PriceMax { get; init; }

    /// <summary>
    /// Minimum bedrooms.
    /// </summary>
    public int? BedsMin { get; init; }

    /// <summary>
    /// Maximum bedrooms.
    /// </summary>
    public int? BedsMax { get; init; }

    /// <summary>
    /// Minimum bathrooms.
    /// </summary>
    public int? BathsMin { get; init; }

    /// <summary>
    /// Maximum bathrooms.
    /// </summary>
    public int? BathsMax { get; init; }

    /// <summary>
    /// Minimum living area in square feet.
    /// </summary>
    public int? SqftMin { get; init; }

    /// <summary>
    /// Maximum living area in square feet.
    /// </summary>
    public int? SqftMax { get; init; }

    /// <summary>
    /// Minimum year built.
    /// </summary>
    public int? YearBuiltMin { get; init; }

    /// <summary>
    /// Maximum year built.
    /// </summary>
    public int? YearBuiltMax { get; init; }

    /// <summary>
    /// Comma-separated home types: house,condo,townhouse,multi_family,manufactured,lot,apartment.
    /// </summary>
    public string? HomeTypes { get; init; }

    /// <summary>
    /// Max age of the listing on Zillow.
    /// </summary>
    public DaysOnZillow1? DaysOnZillow { get; init; }

    /// <summary>
    /// Maximum rows to return in sync mode (default 50, hard cap 50). Billing is 1 credit per row returned, so this is your cost cap — e.g. max_items=5 costs at most 5 credits. For more than 50 results, switch to POST /v1/search with async: true.
    /// </summary>
    [Maximum(50)]
    public int MaxItems { get; init; } = 50;

    /// <summary>
    /// Response format.
    /// </summary>
    public Format Format { get; init; } = Format.Json;

    /// <summary>
    /// Optional free-text place label (city/ZIP/neighborhood) — a hint only. A <c>bbox</c> is REQUIRED; <c>location</c> alone returns 400 (missing_input).
    /// </summary>
    public string? Location { get; init; }
}
