using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record Transcript
{
    /// <summary>
    /// The Amazon S3 location of your transcript. You can use this URI to access or download your transcript. If you included OutputBucketName in your transcription job request, this is the URI of that bucket. If you also included OutputKey in your request, your output is located in the path you specified in your request. If you didn't include OutputBucketName in your transcription job request, your transcript is stored in a service-managed bucket, and TranscriptFileUri provides you with a temporary URI you can use for secure access to your transcript. Temporary URIs for service-managed Amazon S3 buc
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptFileUri")]
    public string? TranscriptFileUri { get; init; }

    /// <summary>
    /// The Amazon S3 location of your redacted transcript. You can use this URI to access or download your transcript. If you included OutputBucketName in your transcription job request, this is the URI of that bucket. If you also included OutputKey in your request, your output is located in the path you specified in your request. If you didn't include OutputBucketName in your transcription job request, your transcript is stored in a service-managed bucket, and RedactedTranscriptFileUri provides you with a temporary URI you can use for secure access to your transcript. Temporary URIs for service-mana
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RedactedTranscriptFileUri")]
    public string? RedactedTranscriptFileUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
