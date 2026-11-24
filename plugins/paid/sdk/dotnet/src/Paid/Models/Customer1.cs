using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record Customer1
{
    /// <summary>
    /// Stable Paid customer display ID. Use this value as the <c>{id}</c> path parameter for customer routes, for example <c>GET /api/v2/customers/cus_abc123/state</c>.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("legalName")]
    public required string? LegalName { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonPropertyName("phone")]
    public required string Phone { get; init; }

    [JsonPropertyName("website")]
    public required string Website { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// Customer billing address, or null when no address is set.
    /// </summary>
    [JsonPropertyName("billingAddress")]
    public required CustomerBillingAddressResponse BillingAddress { get; init; }

    [JsonPropertyName("creationState")]
    public required CustomerCreationState CreationState { get; init; }

    /// <summary>
    /// Customer status: churned when the customer is marked as churned, active otherwise.
    /// </summary>
    [JsonPropertyName("status")]
    public required CustomerStatus Status { get; init; }

    [JsonPropertyName("churnDate")]
    public required DateTimeOffset? ChurnDate { get; init; }

    [JsonPropertyName("vatNumber")]
    public required string? VatNumber { get; init; }

    [JsonPropertyName("metadata")]
    public required IReadOnlyDictionary<string, object>? Metadata { get; init; }

    /// <summary>
    /// ISO 4217 currency code, for example USD, EUR, or GBP.
    /// </summary>
    [JsonPropertyName("defaultCurrency")]
    public required string DefaultCurrency { get; init; }

    /// <summary>
    /// Linked external system IDs for this customer.
    /// </summary>
    [JsonPropertyName("connections")]
    public required CustomerConnections Connections { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
