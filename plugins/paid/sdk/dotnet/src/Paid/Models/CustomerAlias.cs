using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerAlias
{
    /// <summary>
    /// Alternate external identifier that resolves to the customer.
    /// </summary>
    [JsonPropertyName("alias")]
    public required string Alias { get; init; }

    /// <summary>
    /// Paid customer display ID this alias resolves to.
    /// </summary>
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
