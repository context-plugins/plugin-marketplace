using System.Text.Json.Serialization;
using Clix.Core.Models;
using Clix.Models.Enums;

namespace Clix.Models;

/// <summary>
/// Result of a push notification delivery attempt.
/// </summary>
public record Clixexternalv1DeliveryResult
{
    /// <summary>
    /// Unique ID of the push notification message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message_id")]
    public string? MessageId { get; init; }

    /// <summary>
    /// Delivery status of the push notification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Clixexternalv1DeliveryResultStatus2? Status { get; init; }

    /// <summary>
    /// Additional parameters related to the delivery result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_params")]
    public Clixexternalv1DeliveryResultAdditionalParams2? AdditionalParams { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
