using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Details about the merchant's consent to receive American Express marketing communications.
/// </summary>
public record AmexMarketingConsent
{
    /// <summary>
    /// Whether the merchant accepted Amex marketing consent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accepted")]
    public bool? Accepted { get; init; }

    /// <summary>
    /// IP address of the merchant when they provided their marketing consent decision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_address")]
    public string? IpAddress { get; init; }

    /// <summary>
    /// The browser user agent details when the merchant provided their marketing consent decision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_agent")]
    public string? UserAgent { get; init; }

    /// <summary>
    /// Timestamp of when the merchant provided their marketing consent decision (ISO 8601 format).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public string? Timestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
