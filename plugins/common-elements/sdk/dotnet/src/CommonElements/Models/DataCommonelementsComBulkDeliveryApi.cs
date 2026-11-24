using System;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record DataCommonelementsComBulkDeliveryApi
{
    /// <summary>
    /// Delivery id. Poll /v1/deliveries/{id} with it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// Lifecycle state: queued, running, succeeded, failed, or cancelled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Row ceiling applied to this run, from your plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("row_cap")]
    public double? RowCap { get; init; }

    /// <summary>
    /// Lookback window applied in <c>changes</c> mode, from your plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_lookback_days")]
    public double? MaxLookbackDays { get; init; }

    /// <summary>
    /// When the delivery was accepted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_at")]
    public DateTimeOffset? RequestedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
