using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record TransactionLineItemResource
{
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("subtype")]
    public required string Subtype { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("quantity")]
    public required int Quantity { get; init; }

    [JsonPropertyName("price")]
    public required double Price { get; init; }

    [JsonPropertyName("discount")]
    public required double Discount { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
