using System;
using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Models.Enums;

namespace Instacart.Models;

public record ServiceOption
{
    /// <summary>
    /// The unique identifier for the service option.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The date of the service option.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date")]
    public DateTimeOffset? Date { get; init; }

    /// <summary>
    /// The start time of the delivery or pickup window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("window_starts_at")]
    public DateTimeOffset? WindowStartsAt { get; init; }

    /// <summary>
    /// The end time of the delivery or pickup window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("window_ends_at")]
    public DateTimeOffset? WindowEndsAt { get; init; }

    /// <summary>
    /// The type of fulfillment for this service option.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fulfillment_type")]
    public FulfillmentType? FulfillmentType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
