using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Models.Enums;

namespace TranscriptFetch.Models;

public record BatchRequest
{
    /// <summary>
    /// Video URLs or bare YouTube IDs, from any supported platform. Up to your plan's batch cap: 50 on free/Basic/Pro, 500 on Mega/Scale. Also accepted as the legacy key videoIds (send one or the other, not both).
    /// </summary>
    [JsonPropertyName("video_ids")]
    [MinLength(1)]
    [MaxLength(500)]
    public required IReadOnlyList<string> VideoIds { get; init; }

    /// <summary>
    /// Where each entry's text may come from. "auto" (the default) reads captions and transcribes the audio when there are none. "captions" reads an existing caption track only, so a captionless video fails as no_transcript - the behaviour batch had before audio fallback existed. Note "audio" is not accepted here: skipping captions for 50 videos at once is a job queue, not a batch fetch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode1? Mode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
