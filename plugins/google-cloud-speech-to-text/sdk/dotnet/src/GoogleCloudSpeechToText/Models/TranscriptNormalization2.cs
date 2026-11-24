using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Optional. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability &gt; 0.8) and final transcripts.
/// </summary>
public record TranscriptNormalization2
{
    /// <summary>
    /// A list of replacement entries. We will perform replacement with one entry at a time. For example, the second entry in ["cat" =&gt; "dog", "mountain cat" =&gt; "mountain dog"] will never be applied because we will always process the first entry before it. At most 100 entries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entries")]
    public IReadOnlyList<Entry>? Entries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
