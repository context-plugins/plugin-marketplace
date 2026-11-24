using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record AnalyticsCount
{
    /// <summary>
    /// The total number of clicks
    /// </summary>
    [JsonPropertyName("clicks")]
    public double Clicks { get; init; } = 0d;

    /// <summary>
    /// The total number of scans
    /// </summary>
    [JsonPropertyName("scans")]
    public double Scans { get; init; } = 0d;

    /// <summary>
    /// The total number of views
    /// </summary>
    [JsonPropertyName("views")]
    public double Views { get; init; } = 0d;

    /// <summary>
    /// The total number of leads
    /// </summary>
    [JsonPropertyName("leads")]
    public double Leads { get; init; } = 0d;

    /// <summary>
    /// The total number of sales
    /// </summary>
    [JsonPropertyName("sales")]
    public double Sales { get; init; } = 0d;

    /// <summary>
    /// The total amount of sales, in cents
    /// </summary>
    [JsonPropertyName("saleAmount")]
    public double SaleAmount { get; init; } = 0d;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
