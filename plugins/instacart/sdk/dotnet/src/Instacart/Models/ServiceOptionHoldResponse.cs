using System;
using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record ServiceOptionHoldResponse
{
    /// <summary>
    /// The unique identifier for the time slot hold.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hold_id")]
    public string? HoldId { get; init; }

    /// <summary>
    /// The time at which the hold expires and the time slot is released.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service_option")]
    public ServiceOption? ServiceOption { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
