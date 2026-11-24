using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Notify
{
    /// <summary>
    /// true: Razorpay sends SMS notification. false: merchant handles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sms")]
    public bool? Sms { get; init; }

    /// <summary>
    /// true: Razorpay sends email notification. false: merchant handles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public bool? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
