using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record Subtitles
{
    /// <summary>
    /// Specify the output format for your subtitle file; if you select both WebVTT (vtt) and SubRip (srt) formats, two output files are generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Formats")]
    public IReadOnlyList<Format>? Formats { get; init; }

    /// <summary>
    /// Specify the starting value that is assigned to the first subtitle segment. The default start index for Amazon Transcribe is 0, which differs from the more widely used standard of 1. If you're uncertain which value to use, we recommend choosing 1, as this may improve compatibility with other services.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OutputStartIndex")]
    public int? OutputStartIndex { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
