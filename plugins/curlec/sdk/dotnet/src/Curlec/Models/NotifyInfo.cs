using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

/// <summary>
/// If provided, Razorpay sends the mandate auth link directly to the customer.
/// </summary>
public record NotifyInfo
{
    /// <summary>
    /// Customer phone number to send SMS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notify_phone")]
    public string? NotifyPhone { get; init; }

    /// <summary>
    /// Customer email address to send the link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notify_email")]
    public string? NotifyEmail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
