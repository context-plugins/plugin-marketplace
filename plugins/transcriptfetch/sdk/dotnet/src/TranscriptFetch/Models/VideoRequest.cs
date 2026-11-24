using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Core.Validation;
using TranscriptFetch.Core.Validation.Attributes;
using TranscriptFetch.Models.AnyOf;
using TranscriptFetch.Models.Enums;

namespace TranscriptFetch.Models;

public record VideoRequest
{
    /// <summary>
    /// A video URL or 11-character YouTube video ID. Accepts YouTube (watch, youtu.be, /shorts/), TikTok, and Instagram URLs, plus direct media file URLs (mp4/mp3/wav/…). Also accepts podcast links: a Spotify or Apple Podcasts episode URL, or a podcast RSS feed URL, which is resolved to that episode's audio automatically. Videos without captions fall back to AI transcription.
    /// </summary>
    [JsonPropertyName("video")]
    [StringLength(2000, MinimumLength = 1)]
    public required string Video { get; init; }

    /// <summary>
    /// Where the text may come from. "captions" reads an existing caption track and fails if there is none, which is the only way to avoid audio transcription. "audio" skips captions and transcribes the audio. "auto" (the default) tries captions first and transcribes the audio when there are none. Short media may finish inline after a wait of up to 45 seconds; longer work returns 202 with a job to poll or deliver by callback. Audio is charged only on delivery: 1 credit per started minute of audio, minimum 1 (a 20-minute video is 20; the 4-hour cap is 240). Caption fetches are always 1 credit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode? Mode { get; init; } = Mode.Auto;

    /// <summary>
    /// Which form the transcript comes back in. true (the default) returns the <c>segments</c> array, each with start, duration and text (podcast episodes transcribed from audio may also carry a <c>speaker</c> id per segment - see the podcast notes). false returns a single joined <c>text</c> string instead. On the single-transcript 200 exactly one of the two is present, never both, since segments already contain every word the joined text does; job results and batch entries carry both text and segments. The older strings "segment" and "none" mean the same two things and are still accepted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamps")]
    public Timestamps1? Timestamps { get; init; }

    /// <summary>
    /// Where to POST the finished transcript when a request escalates to audio transcription, instead of polling the job. The delivery body is a trimmed envelope - {ok, status, job_id, data} on success, {ok, status, job_id, error} on failure - without the usage and request_id the poll URL adds. When a signing secret is configured on our side, the body is signed with HMAC-SHA256 over the exact bytes and sent as an X-TranscriptFetch-Signature: sha256=&lt;hex&gt; header so you can verify it came from us. Must be a public https URL on the standard port; the URL is checked again at delivery time, so an unreachable or private address still gets a 202 but never receives a delivery. The job stays pollable either way, so a missed delivery is never a lost transcript.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_url")]
    [MaxLength(2000)]
    [Format(FormatKind.Uri)]
    public string? CallbackUrl { get; init; }

    /// <summary>
    /// Legacy alias for "mode", still supported. true is identical to "mode": "audio"; omitted or false is "mode": "auto". Send one or the other, not both. Note that false never disabled the fallback - audio was still transcribed when no captions existed - which is why the field was replaced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ai_fallback")]
    public bool? AiFallback { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
