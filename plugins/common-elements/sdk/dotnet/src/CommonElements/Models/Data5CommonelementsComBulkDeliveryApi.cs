using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record Data5CommonelementsComBulkDeliveryApi
{
    /// <summary>
    /// Schedule id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// daily, weekly, or monthly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cadence")]
    public string? Cadence { get; init; }

    /// <summary>
    /// When the next run is due. Null while paused.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_run_at")]
    public DateTimeOffset? NextRunAt { get; init; }

    /// <summary>
    /// The schedule's recent runs, each in the same shape as a one-off delivery.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runs")]
    public IReadOnlyList<object>? Runs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
