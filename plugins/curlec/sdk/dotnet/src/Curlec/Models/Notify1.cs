using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

/// <summary>
/// Notification handlers. Set true for Razorpay to send, false to handle yourself.
/// </summary>
public record Notify1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sms")]
    public bool? Sms { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public bool? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
