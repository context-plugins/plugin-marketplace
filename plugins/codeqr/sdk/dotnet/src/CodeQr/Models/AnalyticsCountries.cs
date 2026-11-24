using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record AnalyticsCountries
{
    /// <summary>
    /// The 2-letter ISO 3166-1 country code for the country associated with the location of the user. Learn more: https://codeqr.io/geo
    /// </summary>
    [JsonPropertyName("country")]
    public required Country2 Country { get; init; }

    [JsonPropertyName("city")]
    public string City { get; } = "*";

    /// <summary>
    /// The number of clicks from this country
    /// </summary>
    [JsonPropertyName("clicks")]
    public double Clicks { get; init; } = 0d;

    /// <summary>
    /// The number of leads from this country
    /// </summary>
    [JsonPropertyName("leads")]
    public double Leads { get; init; } = 0d;

    /// <summary>
    /// The number of sales from this country
    /// </summary>
    [JsonPropertyName("sales")]
    public double Sales { get; init; } = 0d;

    /// <summary>
    /// The total amount of sales from this country, in cents
    /// </summary>
    [JsonPropertyName("saleAmount")]
    public double SaleAmount { get; init; } = 0d;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
