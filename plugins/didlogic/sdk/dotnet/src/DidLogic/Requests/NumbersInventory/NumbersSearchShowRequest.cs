using DidLogic.Core.Validation.Attributes;

namespace DidLogic.Requests.NumbersInventory;

/// <summary>
/// The inputs of the NumbersSearchShow operation.
/// </summary>
public sealed record NumbersSearchShowRequest
{
    /// <summary>
    /// Search for specific DID IDs (comma-separated)
    /// </summary>
    public int? IdIn { get; init; }

    /// <summary>
    /// Search for specific numbers (exact match, comma-separated)
    /// </summary>
    public string? NumberIn { get; init; }

    /// <summary>
    /// Search for numbers containing this pattern
    /// </summary>
    public int? NumberContains { get; init; }

    /// <summary>
    /// Search for numbers beginning with this pattern
    /// </summary>
    public int? BeginsWith { get; init; }

    /// <summary>
    /// Search for numbers ending with this pattern
    /// </summary>
    public int? EndsWith { get; init; }

    /// <summary>
    /// Filter by city name (partial match)
    /// </summary>
    public string? CityNameContains { get; init; }

    /// <summary>
    /// Filter by country name (partial match), from numbers_countries_index
    /// </summary>
    public string? CountryNameContains { get; init; }

    /// <summary>
    /// Filter by state/region name (partial match, US only), from numbers_countries_regions_index
    /// </summary>
    public string? StateNameContains { get; init; }

    /// <summary>
    /// Filter by SMS capability (true/false)
    /// </summary>
    public string? SmsEnabled { get; init; }

    /// <summary>
    /// Filter by local caller ID capability (true/false)
    /// </summary>
    public string? NoLocalCli { get; init; }

    /// <summary>
    /// Filter by vendor ID (requires special permission)
    /// </summary>
    public int? VendorId { get; init; }

    /// <summary>
    /// City id from numbers_countries_cities_index, numbers_countries_locations_index
    /// </summary>
    public int? CityId { get; init; }

    /// <summary>
    /// Region id from numbers_countries_regions_index, numbers_countries_locations_index
    /// </summary>
    public int? RegionId { get; init; }

    /// <summary>
    /// Filter by document requirements
    /// </summary>
    public int? RequireDocs { get; init; }

    /// <summary>
    /// Filter by commitment period in months
    /// </summary>
    public int? CommitmentMonths { get; init; }

    /// <summary>
    /// Sort by price (activation + monthly fee) ascending
    /// </summary>
    public string? CheapSorting { get; init; }

    /// <summary>
    /// Page number for pagination
    /// </summary>
    [Minimum(1)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// Number of items per page
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PerPage { get; init; } = 25;
}
