using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Represents the transport intermediaries created for the trigger to deliver events.
/// </summary>
public record Transport
{
    /// <summary>
    /// The Pub/Sub topic and subscription used by Eventarc as a transport intermediary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pubsub")]
    public Pubsub1? Pubsub { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
