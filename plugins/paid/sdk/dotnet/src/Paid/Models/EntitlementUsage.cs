using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Tracks the usage of an entitlement for a customer
/// </summary>
public record EntitlementUsage
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonPropertyName("organizationId")]
    public required Guid OrganizationId { get; init; }

    [JsonPropertyName("productId")]
    public required Guid ProductId { get; init; }

    [JsonPropertyName("entitlementId")]
    public required Guid EntitlementId { get; init; }

    [JsonPropertyName("customerId")]
    public required Guid CustomerId { get; init; }

    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    /// <summary>
    /// Total entitlement amount
    /// </summary>
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    /// <summary>
    /// Available entitlement amount
    /// </summary>
    [JsonPropertyName("available")]
    public required long Available { get; init; }

    /// <summary>
    /// Used entitlement amount
    /// </summary>
    [JsonPropertyName("used")]
    public required long Used { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
