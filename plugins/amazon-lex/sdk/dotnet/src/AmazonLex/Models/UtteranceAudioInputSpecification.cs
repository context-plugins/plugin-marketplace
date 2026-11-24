using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UtteranceAudioInputSpecification
{
    /// <summary>
    /// Amazon S3 file pointing to the audio.
    /// </summary>
    [JsonPropertyName("audioFileS3Location")]
    public required string AudioFileS3Location { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
