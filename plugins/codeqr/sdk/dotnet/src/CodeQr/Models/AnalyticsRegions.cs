using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record AnalyticsRegions
{
    /// <summary>
    /// The 2-letter ISO 3166-1 alpha-2 country code of the region.
    /// </summary>
    [JsonPropertyName("country")]
    public required Country1 Country { get; init; }

    /// <summary>
    /// The 2-letter ISO 3166-2 region code representing the region associated with the location of the user.
    /// </summary>
    [JsonPropertyName("region")]
    public required string Region { get; init; }

    [JsonPropertyName("city")]
    public string City { get; } = "*";

    /// <summary>
    /// The number of clicks from this region
    /// </summary>
    [JsonPropertyName("clicks")]
    public double Clicks { get; init; } = 0d;

    /// <summary>
    /// The number of leads from this region
    /// </summary>
    [JsonPropertyName("leads")]
    public double Leads { get; init; } = 0d;

    /// <summary>
    /// The number of sales from this region
    /// </summary>
    [JsonPropertyName("sales")]
    public double Sales { get; init; } = 0d;

    /// <summary>
    /// The total amount of sales from this region, in cents
    /// </summary>
    [JsonPropertyName("saleAmount")]
    public double SaleAmount { get; init; } = 0d;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
