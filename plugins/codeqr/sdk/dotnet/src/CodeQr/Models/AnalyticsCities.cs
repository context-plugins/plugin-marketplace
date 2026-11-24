using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record AnalyticsCities
{
    /// <summary>
    /// The name of the city
    /// </summary>
    [JsonPropertyName("city")]
    public required string City { get; init; }

    /// <summary>
    /// The 2-letter country code of the city: https://codeqr.io/geo
    /// </summary>
    [JsonPropertyName("country")]
    public required Country Country { get; init; }

    /// <summary>
    /// The number of clicks from this city
    /// </summary>
    [JsonPropertyName("clicks")]
    public double Clicks { get; init; } = 0d;

    /// <summary>
    /// The number of leads from this city
    /// </summary>
    [JsonPropertyName("leads")]
    public double Leads { get; init; } = 0d;

    /// <summary>
    /// The number of sales from this city
    /// </summary>
    [JsonPropertyName("sales")]
    public double Sales { get; init; } = 0d;

    /// <summary>
    /// The total amount of sales from this city, in cents
    /// </summary>
    [JsonPropertyName("saleAmount")]
    public double SaleAmount { get; init; } = 0d;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
