using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record MedicalTranscript
{
    /// <summary>
    /// The Amazon S3 location of your transcript. You can use this URI to access or download your transcript. Note that this is the Amazon S3 location you specified in your request using the OutputBucketName parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptFileUri")]
    public string? TranscriptFileUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
