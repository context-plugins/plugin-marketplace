using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// The product and plan the customer selected, once checkout completes. Null before completion.
/// </summary>
public record CheckoutSelectedProduct
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("plan")]
    public required PlanRef Plan { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
