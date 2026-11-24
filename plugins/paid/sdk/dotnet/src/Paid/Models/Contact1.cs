using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record Contact1
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonPropertyName("firstName")]
    public required string FirstName { get; init; }

    [JsonPropertyName("lastName")]
    public required string LastName { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonPropertyName("phone")]
    public required string? Phone { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingAddress")]
    public ContactBillingAddress? BillingAddress { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    [JsonPropertyName("roles")]
    public required IReadOnlyList<ContactRolesItems> Roles { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
