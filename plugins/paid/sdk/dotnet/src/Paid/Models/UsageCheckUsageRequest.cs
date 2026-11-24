using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record UsageCheckUsageRequest
{
    /// <summary>
    /// External customer ID
    /// </summary>
    [JsonPropertyName("externalCustomerId")]
    public required string ExternalCustomerId { get; init; }

    /// <summary>
    /// External product ID (the external ID of the product/agent)
    /// </summary>
    [JsonPropertyName("externalProductId")]
    public required string ExternalProductId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
