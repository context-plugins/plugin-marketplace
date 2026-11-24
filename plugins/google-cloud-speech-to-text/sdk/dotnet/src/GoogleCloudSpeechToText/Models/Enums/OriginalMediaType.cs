using System;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Enum;

namespace GoogleCloudSpeechToText.Models.Enums;

/// <summary>
/// The original media the speech was recorded on.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OriginalMediaType>))]
public sealed record OriginalMediaType : OpenStringEnum<OriginalMediaType>
{
    private OriginalMediaType(string value) : base(value)
    {
    }

    public static readonly OriginalMediaType OriginalMediaTypeUnspecified = new("ORIGINAL_MEDIA_TYPE_UNSPECIFIED");

    public static readonly OriginalMediaType Audio = new("AUDIO");

    public static readonly OriginalMediaType Video = new("VIDEO");

    public TResult Match<TResult>(Func<TResult> onOriginalMediaTypeUnspecified,
        Func<TResult> onAudio,
        Func<TResult> onVideo,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OriginalMediaTypeUnspecified => onOriginalMediaTypeUnspecified(),
            _ when this == Audio => onAudio(),
            _ when this == Video => onVideo(),
            _ => otherwise(Value)
        };

    public void Match(Action onOriginalMediaTypeUnspecified, Action onAudio, Action onVideo, Action<string> otherwise)
    {
        if (this == OriginalMediaTypeUnspecified) onOriginalMediaTypeUnspecified();
        else if (this == Audio) onAudio();
        else if (this == Video) onVideo();
        else otherwise(Value);
    }
}
