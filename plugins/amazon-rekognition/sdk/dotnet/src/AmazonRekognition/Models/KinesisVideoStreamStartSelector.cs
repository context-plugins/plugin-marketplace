using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record KinesisVideoStreamStartSelector
{
    /// <summary>
    /// The timestamp from the producer corresponding to the fragment, in milliseconds, expressed in unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProducerTimestamp")]
    public int? ProducerTimestamp { get; init; }

    /// <summary>
    /// The unique identifier of the fragment. This value monotonically increases based on the ingestion order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FragmentNumber")]
    public string? FragmentNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
