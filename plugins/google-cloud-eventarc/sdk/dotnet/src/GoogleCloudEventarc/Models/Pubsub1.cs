using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// The Pub/Sub topic and subscription used by Eventarc as a transport intermediary.
/// </summary>
public record Pubsub1
{
    /// <summary>
    /// Optional. The name of the Pub/Sub topic created and managed by Eventarc as a transport for the event delivery. Format: <c>projects/{PROJECT_ID}/topics/{TOPIC_NAME}</c>. You can set an existing topic for triggers of the type <c>google.cloud.pubsub.topic.v1.messagePublished</c>. The topic you provide here is not deleted by Eventarc at trigger deletion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topic")]
    public string? Topic { get; init; }

    /// <summary>
    /// Output only. The name of the Pub/Sub subscription created and managed by Eventarc as a transport for the event delivery. Format: <c>projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription")]
    public string? Subscription { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
