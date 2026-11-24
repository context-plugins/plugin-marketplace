using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record AnalyticsTimeseries
{
    /// <summary>
    /// The starting timestamp of the interval
    /// </summary>
    [JsonPropertyName("start")]
    public required string Start { get; init; }

    /// <summary>
    /// The number of clicks in the interval
    /// </summary>
    [JsonPropertyName("clicks")]
    public double Clicks { get; init; } = 0d;

    /// <summary>
    /// The number of scans in the interval
    /// </summary>
    [JsonPropertyName("scans")]
    public double Scans { get; init; } = 0d;

    /// <summary>
    /// The number of views in the interval
    /// </summary>
    [JsonPropertyName("views")]
    public double Views { get; init; } = 0d;

    /// <summary>
    /// The number of leads in the interval
    /// </summary>
    [JsonPropertyName("leads")]
    public double Leads { get; init; } = 0d;

    /// <summary>
    /// The number of sales in the interval
    /// </summary>
    [JsonPropertyName("sales")]
    public double Sales { get; init; } = 0d;

    /// <summary>
    /// The total amount of sales in the interval, in cents
    /// </summary>
    [JsonPropertyName("saleAmount")]
    public double SaleAmount { get; init; } = 0d;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
