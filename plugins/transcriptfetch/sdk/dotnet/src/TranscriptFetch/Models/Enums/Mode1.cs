using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

/// <summary>
/// Where each entry's text may come from. "auto" (the default) reads captions and transcribes the audio when there are none. "captions" reads an existing caption track only, so a captionless video fails as no_transcript - the behaviour batch had before audio fallback existed. Note "audio" is not accepted here: skipping captions for 50 videos at once is a job queue, not a batch fetch.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode1>))]
public sealed record Mode1 : OpenStringEnum<Mode1>
{
    private Mode1(string value) : base(value)
    {
    }

    public static readonly Mode1 Auto = new("auto");

    public static readonly Mode1 Captions = new("captions");

    public TResult Match<TResult>(Func<TResult> onAuto, Func<TResult> onCaptions, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ when this == Captions => onCaptions(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto, Action onCaptions, Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else if (this == Captions) onCaptions();
        else otherwise(Value);
    }
}
