using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

/// <summary>
/// Where the text may come from. "captions" reads an existing caption track and fails if there is none, which is the only way to avoid audio transcription. "audio" skips captions and transcribes the audio. "auto" (the default) tries captions first and transcribes the audio when there are none. Short media may finish inline after a wait of up to 45 seconds; longer work returns 202 with a job to poll or deliver by callback. Audio is charged only on delivery: 1 credit per started minute of audio, minimum 1 (a 20-minute video is 20; the 4-hour cap is 240). Caption fetches are always 1 credit.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Captions = new("captions");

    public static readonly Mode Audio = new("audio");

    public static readonly Mode Auto = new("auto");

    public TResult Match<TResult>(Func<TResult> onCaptions,
        Func<TResult> onAudio,
        Func<TResult> onAuto,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Captions => onCaptions(),
            _ when this == Audio => onAudio(),
            _ when this == Auto => onAuto(),
            _ => otherwise(Value)
        };

    public void Match(Action onCaptions, Action onAudio, Action onAuto, Action<string> otherwise)
    {
        if (this == Captions) onCaptions();
        else if (this == Audio) onAudio();
        else if (this == Auto) onAuto();
        else otherwise(Value);
    }
}
