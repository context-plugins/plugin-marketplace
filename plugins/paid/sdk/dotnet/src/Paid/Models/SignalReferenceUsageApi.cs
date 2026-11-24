using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// DEPRECATED: Use SignalV2 instead for cleaner field names.
/// </summary>
public record SignalReferenceUsageApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_name")]
    public string? EventName { get; init; }

    /// <summary>
    /// DEPRECATED: Use product_id in SignalV2 instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent_id")]
    public string? AgentId { get; init; }

    /// <summary>
    /// DEPRECATED: Use external_product_id in SignalV2 instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_agent_id")]
    public string? ExternalAgentId { get; init; }

    /// <summary>
    /// DEPRECATED: The external customer id. Use <c>external_customer_id</c> or <c>internal_customer_id</c> instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_id")]
    public string? CustomerId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyDictionary<string, object>? Data { get; init; }

    /// <summary>
    /// A unique key to ensure idempotent signal processing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotency_key")]
    public string? IdempotencyKey { get; init; }

    /// <summary>
    /// DEPRECATED: Use customer_id in SignalV2 instead. This was Paid's internal customer ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("internal_customer_id")]
    public string? InternalCustomerId { get; init; }

    /// <summary>
    /// Your system's customer ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_customer_id")]
    public string? ExternalCustomerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
