using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record AnalyticsRefererUrls
{
    /// <summary>
    /// The full URL of the referer. If unknown, this will be <c>(direct)</c>
    /// </summary>
    [JsonPropertyName("refererUrl")]
    public required string RefererUrl { get; init; }

    /// <summary>
    /// The number of clicks from this referer to this URL
    /// </summary>
    [JsonPropertyName("clicks")]
    public double Clicks { get; init; } = 0d;

    /// <summary>
    /// The number of leads from this referer to this URL
    /// </summary>
    [JsonPropertyName("leads")]
    public double Leads { get; init; } = 0d;

    /// <summary>
    /// The number of sales from this referer to this URL
    /// </summary>
    [JsonPropertyName("sales")]
    public double Sales { get; init; } = 0d;

    /// <summary>
    /// The total amount of sales from this referer to this URL, in cents
    /// </summary>
    [JsonPropertyName("saleAmount")]
    public double SaleAmount { get; init; } = 0d;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
