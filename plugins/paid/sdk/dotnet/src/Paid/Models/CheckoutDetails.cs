using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CheckoutDetails
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("status")]
    public required CheckoutStatus Status { get; init; }

    [JsonPropertyName("products")]
    public required IReadOnlyList<CheckoutProduct> Products { get; init; }

    [JsonPropertyName("customerId")]
    public required string? CustomerId { get; init; }

    [JsonPropertyName("externalCustomerId")]
    public required string? ExternalCustomerId { get; init; }

    [JsonPropertyName("successUrl")]
    public required string SuccessUrl { get; init; }

    [JsonPropertyName("cancelUrl")]
    public required string? CancelUrl { get; init; }

    [JsonPropertyName("expiresAt")]
    public required DateTimeOffset? ExpiresAt { get; init; }

    [JsonPropertyName("metadata")]
    public required IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonPropertyName("collectAddress")]
    public required bool CollectAddress { get; init; }

    [JsonPropertyName("collectPhone")]
    public required bool CollectPhone { get; init; }

    [JsonPropertyName("singleUse")]
    public required bool SingleUse { get; init; }

    [JsonPropertyName("allowedCurrencies")]
    public required IReadOnlyList<string> AllowedCurrencies { get; init; }

    /// <summary>
    /// Additional informational pricing cards rendered alongside the plans.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customCards")]
    public IReadOnlyList<CheckoutCustomCard>? CustomCards { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The resulting order ID once checkout has completed. Null until an order is created.
    /// </summary>
    [JsonPropertyName("orderId")]
    public required string? OrderId { get; init; }

    /// <summary>
    /// The product and plan the customer selected, once checkout completes. Null before completion.
    /// </summary>
    [JsonPropertyName("selectedProduct")]
    public required CheckoutSelectedProduct SelectedProduct { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
