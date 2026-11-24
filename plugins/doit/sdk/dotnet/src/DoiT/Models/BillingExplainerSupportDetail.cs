using System.Text.Json.Serialization;

namespace DoiT.Models;

public record BillingExplainerSupportDetail
{
    [JsonPropertyName("projectId")]
    public required string ProjectId { get; init; }

    [JsonPropertyName("serviceDescription")]
    public required string ServiceDescription { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Monetary value represented as a decimal string and an ISO 4217 currency code.
    /// </summary>
    [JsonPropertyName("cost")]
    public required BillingExplainerMoney Cost { get; init; }

    /// <summary>
    /// Monetary value represented as a decimal string and an ISO 4217 currency code.
    /// </summary>
    [JsonPropertyName("baseCost")]
    public required BillingExplainerMoney BaseCost { get; init; }
}
