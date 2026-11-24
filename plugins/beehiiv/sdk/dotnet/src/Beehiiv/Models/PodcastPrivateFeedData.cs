using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PodcastPrivateFeedData
{
    /// <summary>
    /// The prefixed ID of the private feed token.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The personalized private RSS feed URL.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The time the private feed token was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("created")]
    public required int Created { get; init; }

    /// <summary>
    /// The time the private feed was first fetched by a recognized podcast app. Measured in seconds since the Unix epoch. Null when the feed has not been activated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activated")]
    public int? Activated { get; init; }

    /// <summary>
    /// The time the private feed token was revoked. Measured in seconds since the Unix epoch. Null when the token has not been revoked.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revoked")]
    public int? Revoked { get; init; }

    /// <summary>
    /// The time the private feed token expires. Measured in seconds since the Unix epoch. Null when the token does not expire.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires")]
    public int? Expires { get; init; }

    /// <summary>
    /// The subscription associated with the private feed token.
    /// </summary>
    [JsonPropertyName("subscription")]
    public required SubscriptionData1 Subscription { get; init; }

    /// <summary>
    /// The podcast associated with the private feed token.
    /// </summary>
    [JsonPropertyName("show")]
    public required PodcastShowData1 Show { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
