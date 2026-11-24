using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

public record Clixexternalv1DeliveryResultAdditionalParams
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device_id")]
    public string? DeviceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fcm_message_id")]
    public string? FcmMessageId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_reason")]
    public string? FailureReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
