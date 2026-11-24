using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

/// <summary>
/// Where the words came from: an existing caption track, or AI transcription of the audio (billed by length, see usage.credits_spent).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source Captions = new("captions");

    public static readonly Source Audio = new("audio");

    public TResult Match<TResult>(Func<TResult> onCaptions, Func<TResult> onAudio, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Captions => onCaptions(),
            _ when this == Audio => onAudio(),
            _ => otherwise(Value)
        };

    public void Match(Action onCaptions, Action onAudio, Action<string> otherwise)
    {
        if (this == Captions) onCaptions();
        else if (this == Audio) onAudio();
        else otherwise(Value);
    }
}
