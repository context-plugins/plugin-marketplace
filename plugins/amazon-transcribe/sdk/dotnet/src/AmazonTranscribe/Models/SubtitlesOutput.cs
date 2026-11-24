using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record SubtitlesOutput
{
    /// <summary>
    /// Provides the format of your subtitle files. If your request included both WebVTT (vtt) and SubRip (srt) formats, both formats are shown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Formats")]
    public IReadOnlyList<Format>? Formats { get; init; }

    /// <summary>
    /// The Amazon S3 location of your transcript. You can use this URI to access or download your subtitle file. Your subtitle file is stored in the same location as your transcript. If you specified both WebVTT and SubRip subtitle formats, two URIs are provided. If you included OutputBucketName in your transcription job request, this is the URI of that bucket. If you also included OutputKey in your request, your output is located in the path you specified in your request. If you didn't include OutputBucketName in your transcription job request, your subtitle file is stored in a service-managed bucke
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SubtitleFileUris")]
    public IReadOnlyList<string>? SubtitleFileUris { get; init; }

    /// <summary>
    /// Provides the start index value for your subtitle files. If you did not specify a value in your request, the default value of 0 is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OutputStartIndex")]
    public int? OutputStartIndex { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
