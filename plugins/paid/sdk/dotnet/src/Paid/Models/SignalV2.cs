using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// V2 signal schema with clean field names. IMPORTANT: Exactly one customer ID field (customer_id OR external_customer_id) and exactly one product ID field (product_id OR external_product_id) must be provided per signal.
/// </summary>
public record SignalV2
{
    /// <summary>
    /// The name of the event being tracked
    /// </summary>
    [JsonPropertyName("event_name")]
    public required string EventName { get; init; }

    /// <summary>
    /// Paid's display ID for the product (e.g., prod_abc123). Cannot be used with external_product_id. Either this or external_product_id is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_id")]
    public string? ProductId { get; init; }

    /// <summary>
    /// Your system's product ID. Cannot be used with product_id. Either this or product_id is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_product_id")]
    public string? ExternalProductId { get; init; }

    /// <summary>
    /// Paid's display ID for the customer (e.g., cus_xyz789). Cannot be used with external_customer_id. Either this or external_customer_id is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_id")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Your system's customer ID. Cannot be used with customer_id. Either this or customer_id is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_customer_id")]
    public string? ExternalCustomerId { get; init; }

    /// <summary>
    /// Optional additional data/metadata for the signal
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyDictionary<string, object>? Data { get; init; }

    /// <summary>
    /// A unique key to ensure idempotent signal processing. If a signal with the same idempotency key has already been processed, the entire batch will be rejected with a 409 Conflict error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotency_key")]
    public string? IdempotencyKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
