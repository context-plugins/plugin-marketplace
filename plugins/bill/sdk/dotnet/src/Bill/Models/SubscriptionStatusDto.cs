using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Subscription status information.
/// </summary>
public record SubscriptionStatusDto
{
    /// <summary>
    /// Set as <c>true</c> if the subscription is enabled. When you create a new subscription, this value is set as <c>true</c> by default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Reason for changing the subscription status. This field is used by BILL for informing you when the <c>enabled</c> field is set as <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
