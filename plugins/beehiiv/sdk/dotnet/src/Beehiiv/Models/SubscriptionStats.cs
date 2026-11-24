using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Optional list of stats for a subscription. Retrievable by including <c>expand: [stats]</c> in the request body.
/// </summary>
public record SubscriptionStats
{
    /// <summary>
    /// The total number of emails that have been sent to this subscriber
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails_received")]
    public int? EmailsReceived { get; init; }

    /// <summary>
    /// The percentage of emails that the subscriber has opened
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("open_rate")]
    public double? OpenRate { get; init; }

    /// <summary>
    /// The percentage of emails that the subscriber has clicked a link in
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("click_through_rate")]
    public double? ClickThroughRate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
