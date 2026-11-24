using System;
using System.Collections.Generic;
using Apibara.Core.Validation.Attributes;
using Apibara.Models.AnyOf;
using Apibara.Models.Enums;

namespace Apibara.Requests.Vehicles;

/// <summary>
/// The inputs of the ListAuctionVehicles operation.
/// </summary>
public sealed record ListAuctionVehiclesRequest
{
    /// <summary>
    /// Search by lot number, VIN, or vehicle title.
    /// </summary>
    public string? S { get; init; }

    /// <summary>
    /// Lot status filter.
    /// </summary>
    public LotStatus LotStatus { get; init; } = LotStatus.All;

    /// <summary>
    /// Normalized lot sub-status. Open = active/open and not sold; Live = currently live when supported; Ended = ended/closed state. Open also includes imported active lots with an unassigned auction date. Their auction_at is null and auction_date_pending is true. Explicit date-range filters exclude unassigned dates.
    /// </summary>
    public LotSubStatus LotSubStatus { get; init; } = LotSubStatus.Open;

    /// <summary>
    /// Upcoming selector. all = no restriction; only = only upcoming eligible lots; without = exclude upcoming lots. This does not override Open/Sold state logic.
    /// </summary>
    public Upcoming Upcoming { get; init; } = Upcoming.All;

    /// <summary>
    /// true returns only source listings whose auction date is not yet assigned; false excludes date-pending lots.
    /// </summary>
    public bool? AuctionDatePending { get; init; }

    /// <summary>
    /// Return records whose updated_at changed within the requested number of minutes. Designed for incremental synchronization; combine with cursor pagination and auction filters.
    /// </summary>
    [Minimum(1)]
    [Maximum(525600)]
    public int? UpdatedWithinMinutes { get; init; }

    /// <summary>
    /// Minimum price.
    /// </summary>
    public double? PriceMin { get; init; }

    /// <summary>
    /// Maximum price.
    /// </summary>
    public double? PriceMax { get; init; }

    /// <summary>
    /// Minimum vehicle year.
    /// </summary>
    public int? YearFrom { get; init; }

    /// <summary>
    /// Maximum vehicle year.
    /// </summary>
    public int? YearTo { get; init; }

    /// <summary>
    /// Numeric auction platform filter: 0 = all supported platforms, 1 = Copart, 2 = IAAI. Use either auction_type or platform in the same request.
    /// </summary>
    public AuctionType AuctionType { get; init; } = AuctionType.Value0;

    /// <summary>
    /// Readable auction platform filter. Use copart or iaai. Use either platform or auction_type in the same request.
    /// </summary>
    public Platform? Platform { get; init; }

    /// <summary>
    /// Vehicle type. Multiple values are OR-ed; query-array syntax such as type[]=COUPE&amp;type[]=AUTOMOBILE is supported.
    /// </summary>
    public Type1? Type { get; init; }

    /// <summary>
    /// Filter by vehicle_specs.body_style. Multiple values are OR-ed. Query-array syntax is supported, for example body_style[]=Coupe&amp;body_style[]=Convertible. IAAI uses its VehicleClass value; Copart uses the source-backed Body Style field.
    /// </summary>
    public BodyStyle? BodyStyle { get; init; }

    /// <summary>
    /// Compatibility alias for body_style. Multiple values are OR-ed. Prefer body_style for new integrations.
    /// </summary>
    public BodyType? BodyType { get; init; }

    /// <summary>
    /// Vehicle make.
    /// </summary>
    public string? Make { get; init; }

    /// <summary>
    /// Canonical vehicle series / model family. Examples: BMW Series 3, Mercedes-Benz C-Class, Toyota Camry, Audi A4, Ford F-150. Optional; can be combined with model and generation filters.
    /// </summary>
    public Series? Series { get; init; }

    /// <summary>
    /// Vehicle model.
    /// </summary>
    public string? Model { get; init; }

    /// <summary>
    /// Vehicle generation catalog ID. Use /vehicles/filters?make=BMW&amp;model=X5 to discover valid IDs. Multiple IDs are supported.
    /// </summary>
    public GenerationId? GenerationId { get; init; }

    /// <summary>
    /// Human-readable generation alias, for example F15, E70 or G05. generation_id is preferred for stable integrations.
    /// </summary>
    public Generation? Generation { get; init; }

    /// <summary>
    /// Vehicle color. Multiple values are supported.
    /// </summary>
    public IReadOnlyList<string>? Color { get; init; }

    /// <summary>
    /// Match VINs that start with any supplied prefix (OR). Supports comma-separated values vin_prefix=1,4,5 and array syntax vin_prefix[]=1&amp;vin_prefix[]=4&amp;vin_prefix[]=5. Prefixes consist of 1–3 VIN letters/numbers; at most 20 unique prefixes. Combines with other filters, cursor, and include_total. Prefix does not guarantee manufacturing country.
    /// </summary>
    public VinPrefix? VinPrefix { get; init; }

    /// <summary>
    /// Normalized fuel type; Hybrid includes source values Hybrid, Electric and Gas Hybrid, Hybrid Engine, and Electric and Diesel Hybrid. Multiple values are supported.
    /// </summary>
    public IReadOnlyList<FuelType>? FuelType { get; init; }

    /// <summary>
    /// Minimum odometer value in miles. Vehicle responses also include the converted km value.
    /// </summary>
    public double? OdometerFrom { get; init; }

    /// <summary>
    /// Maximum odometer value in miles. Vehicle responses also include the converted km value.
    /// </summary>
    public double? OdometerTo { get; init; }

    /// <summary>
    /// Minimum engine size.
    /// </summary>
    public double? EngineSizeFrom { get; init; }

    /// <summary>
    /// Maximum engine size.
    /// </summary>
    public double? EngineSizeTo { get; init; }

    /// <summary>
    /// Engine layout. I=inline, V=V engine, W=W engine, B/H=boxer/horizontally opposed. Scalar and repeated-array forms are supported.
    /// </summary>
    public EngineType1? EngineType { get; init; }

    /// <summary>
    /// Transmission type. Multiple values are supported.
    /// </summary>
    public IReadOnlyList<Transmission>? Transmission { get; init; }

    /// <summary>
    /// Number of cylinders. Multiple values are supported.
    /// </summary>
    public IReadOnlyList<int>? Cylinders { get; init; }

    /// <summary>
    /// Drive type. Multiple values are supported.
    /// </summary>
    public IReadOnlyList<DriveType>? DriveType { get; init; }

    /// <summary>
    /// Source-backed running-condition filter. Multiple values are OR-ed; use both Run &amp; Drive Verified and RUNS AND DRIVES for a combined Copart + IAAI running-vehicle filter.
    /// </summary>
    public RunCond1? RunCond { get; init; }

    /// <summary>
    /// Damage type. Multiple values are supported.
    /// </summary>
    public IReadOnlyList<Damage>? Damage { get; init; }

    /// <summary>
    /// Filter vehicles by key availability.
    /// </summary>
    public HasKey? HasKey { get; init; }

    /// <summary>
    /// Cursor for pagination.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// ZIP code for location-based search.
    /// </summary>
    public string? Zip { get; init; }

    /// <summary>
    /// Search radius around ZIP.
    /// </summary>
    public double? Radius { get; init; }

    /// <summary>
    /// Distance units.
    /// </summary>
    public Units Units { get; init; } = Units.Mi;

    /// <summary>
    /// Records per vehicle-search page. Default 20. The effective maximum is plan-dependent; public plan entitlements can use maxima of 20, 30 or 40, while approved custom plans may differ. Use the active account entitlement as the runtime source of truth.
    /// </summary>
    [Minimum(1)]
    public int PerPage { get; init; } = 20;

    /// <summary>
    /// When true, meta.total attempts an exact filtered count. For very large or expensive result sets the safety-bounded count may return null; cursor pagination remains available.
    /// </summary>
    public bool IncludeTotal { get; init; } = false;

    /// <summary>
    /// Auction facility ID.
    /// </summary>
    public string? FacilityId { get; init; }

    /// <summary>
    /// Auction facility state/region code. Accepts a scalar or repeated/form-style array, e.g. loc_state=FL or loc_state[]=FL.
    /// </summary>
    public LocState? LocState { get; init; }

    /// <summary>
    /// Auction office or branch name.
    /// </summary>
    public string? OfficeName { get; init; }

    /// <summary>
    /// Auction date from.
    /// </summary>
    public DateTimeOffset? AuctionDateFrom { get; init; }

    /// <summary>
    /// Auction date to.
    /// </summary>
    public DateTimeOffset? AuctionDateTo { get; init; }

    /// <summary>
    /// Return only vehicles with auctions today.
    /// </summary>
    public bool TodayOnly { get; init; } = false;

    /// <summary>
    /// Filter by pending sale document.
    /// </summary>
    public bool SaleDocumentPending { get; init; } = false;

    /// <summary>
    /// Sale document type.
    /// </summary>
    public string? SaleDocumentType { get; init; }

    /// <summary>
    /// Filter by name-based seller classification, not damage/title heuristics. Missing seller names are unknown and do not match non_insurance. For non_insurance, also provide make, model, facility_id or s with a specific VIN/lot; unscoped searches return 422 selective_filter_required. For a full catalogue, sync and filter known seller types locally.
    /// </summary>
    public SellerType? SellerType { get; init; }

    /// <summary>
    /// Return only vehicles with shipping price data.
    /// </summary>
    public bool HasShippingPrice { get; init; } = false;
}
