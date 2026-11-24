using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record TicketResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("id_suffix")]
    public required string IdSuffix { get; init; }

    [JsonPropertyName("transaction_id")]
    public required string TransactionId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("first_name")]
    public required string FirstName { get; init; }

    [JsonPropertyName("last_name")]
    public required string LastName { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonPropertyName("phone")]
    public required string Phone { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("price")]
    public required double Price { get; init; }

    [JsonPropertyName("pdf")]
    public required string Pdf { get; init; }

    [JsonPropertyName("checked_in_at")]
    public required string CheckedInAt { get; init; }

    [JsonPropertyName("custom_fields")]
    public required IReadOnlyList<CustomFieldResponseResource> CustomFields { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonPropertyName("retail_price")]
    public required string? RetailPrice { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
