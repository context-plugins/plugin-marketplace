using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record AnalyticsBrowsers
{
    /// <summary>
    /// The name of the browser
    /// </summary>
    [JsonPropertyName("browser")]
    public required string Browser { get; init; }

    /// <summary>
    /// The number of clicks from this browser
    /// </summary>
    [JsonPropertyName("clicks")]
    public double Clicks { get; init; } = 0d;

    /// <summary>
    /// The number of leads from this browser
    /// </summary>
    [JsonPropertyName("leads")]
    public double Leads { get; init; } = 0d;

    /// <summary>
    /// The number of sales from this browser
    /// </summary>
    [JsonPropertyName("sales")]
    public double Sales { get; init; } = 0d;

    /// <summary>
    /// The total amount of sales from this browser, in cents
    /// </summary>
    [JsonPropertyName("saleAmount")]
    public double SaleAmount { get; init; } = 0d;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
