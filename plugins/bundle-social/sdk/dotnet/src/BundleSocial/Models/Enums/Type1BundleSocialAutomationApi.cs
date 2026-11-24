using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1BundleSocialAutomationApi>))]
public sealed record Type1BundleSocialAutomationApi : OpenStringEnum<Type1BundleSocialAutomationApi>
{
    private Type1BundleSocialAutomationApi(string value) : base(value)
    {
    }

    public static readonly Type1BundleSocialAutomationApi Image = new("IMAGE");

    public static readonly Type1BundleSocialAutomationApi Video = new("VIDEO");

    public static readonly Type1BundleSocialAutomationApi Audio = new("AUDIO");

    public static readonly Type1BundleSocialAutomationApi File = new("FILE");

    public TResult Match<TResult>(Func<TResult> onImage,
        Func<TResult> onVideo,
        Func<TResult> onAudio,
        Func<TResult> onFile,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Image => onImage(),
            _ when this == Video => onVideo(),
            _ when this == Audio => onAudio(),
            _ when this == File => onFile(),
            _ => otherwise(Value)
        };

    public void Match(Action onImage, Action onVideo, Action onAudio, Action onFile, Action<string> otherwise)
    {
        if (this == Image) onImage();
        else if (this == Video) onVideo();
        else if (this == Audio) onAudio();
        else if (this == File) onFile();
        else otherwise(Value);
    }
}
