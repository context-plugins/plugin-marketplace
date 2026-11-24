using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source Upload = new("upload");

    public static readonly Source Youtube = new("youtube");

    public static readonly Source Vimeo = new("vimeo");

    public static readonly Source Twitch = new("twitch");

    public static readonly Source Facebook = new("facebook");

    public TResult Match<TResult>(Func<TResult> onUpload,
        Func<TResult> onYoutube,
        Func<TResult> onVimeo,
        Func<TResult> onTwitch,
        Func<TResult> onFacebook,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Upload => onUpload(),
            _ when this == Youtube => onYoutube(),
            _ when this == Vimeo => onVimeo(),
            _ when this == Twitch => onTwitch(),
            _ when this == Facebook => onFacebook(),
            _ => otherwise(Value)
        };

    public void Match(Action onUpload,
        Action onYoutube,
        Action onVimeo,
        Action onTwitch,
        Action onFacebook,
        Action<string> otherwise)
    {
        if (this == Upload) onUpload();
        else if (this == Youtube) onYoutube();
        else if (this == Vimeo) onVimeo();
        else if (this == Twitch) onTwitch();
        else if (this == Facebook) onFacebook();
        else otherwise(Value);
    }
}
