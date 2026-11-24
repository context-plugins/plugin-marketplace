using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record SyncValueReceiptRequest
{
    /// <summary>
    /// Mutually exclusive with externalCustomerId. Exactly one is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Mutually exclusive with customerId. Exactly one is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalCustomerId")]
    public string? ExternalCustomerId { get; init; }

    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    [JsonPropertyName("endDate")]
    public required DateTimeOffset EndDate { get; init; }

    /// <summary>
    /// Mutually exclusive with orderId. Provide at most one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public SyncValueReceiptRequestProduct? Product { get; init; }

    /// <summary>
    /// Mutually exclusive with product. Provide at most one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderId")]
    public string? OrderId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
