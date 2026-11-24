using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

/// <summary>
/// outcome "ok" only.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Source1>))]
public sealed record Source1 : OpenStringEnum<Source1>
{
    private Source1(string value) : base(value)
    {
    }

    public static readonly Source1 Captions = new("captions");

    public static readonly Source1 Audio = new("audio");

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
