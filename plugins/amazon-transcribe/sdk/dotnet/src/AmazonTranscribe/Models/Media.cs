using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record Media
{
    /// <summary>
    /// The Amazon S3 location of the media file you want to transcribe. For example: s3://DOC-EXAMPLE-BUCKET/my-media-file.flac s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac Note that the Amazon S3 bucket that contains your input media must be located in the same Amazon Web Services Region where you're making your transcription request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MediaFileUri")]
    public string? MediaFileUri { get; init; }

    /// <summary>
    /// The Amazon S3 location of the media file you want to redact. For example: s3://DOC-EXAMPLE-BUCKET/my-media-file.flac s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac Note that the Amazon S3 bucket that contains your input media must be located in the same Amazon Web Services Region where you're making your transcription request. RedactedMediaFileUri produces a redacted audio file in addition to a redacted transcript. It is only supported for Call Analytics (StartCallAnalyticsJob) transcription requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RedactedMediaFileUri")]
    public string? RedactedMediaFileUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
