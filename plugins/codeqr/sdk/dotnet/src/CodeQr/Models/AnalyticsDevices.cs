using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record AnalyticsDevices
{
    /// <summary>
    /// The name of the device
    /// </summary>
    [JsonPropertyName("device")]
    public required string Device { get; init; }

    /// <summary>
    /// The number of clicks from this device
    /// </summary>
    [JsonPropertyName("clicks")]
    public double Clicks { get; init; } = 0d;

    /// <summary>
    /// The number of leads from this device
    /// </summary>
    [JsonPropertyName("leads")]
    public double Leads { get; init; } = 0d;

    /// <summary>
    /// The number of sales from this device
    /// </summary>
    [JsonPropertyName("sales")]
    public double Sales { get; init; } = 0d;

    /// <summary>
    /// The total amount of sales from this device, in cents
    /// </summary>
    [JsonPropertyName("saleAmount")]
    public double SaleAmount { get; init; } = 0d;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
