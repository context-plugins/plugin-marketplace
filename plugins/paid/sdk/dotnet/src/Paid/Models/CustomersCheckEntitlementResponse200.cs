using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomersCheckEntitlementResponse200
{
    /// <summary>
    /// Whether the customer is entitled to the specified event
    /// </summary>
    [JsonPropertyName("entitled")]
    public required bool Entitled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
