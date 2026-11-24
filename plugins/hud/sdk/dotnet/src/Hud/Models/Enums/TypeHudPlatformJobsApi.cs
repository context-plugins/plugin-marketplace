using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeHudPlatformJobsApi>))]
public sealed record TypeHudPlatformJobsApi : OpenStringEnum<TypeHudPlatformJobsApi>
{
    private TypeHudPlatformJobsApi(string value) : base(value)
    {
    }

    public static readonly TypeHudPlatformJobsApi Text = new("text");

    public static readonly TypeHudPlatformJobsApi Image = new("image");

    public static readonly TypeHudPlatformJobsApi Audio = new("audio");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onImage,
        Func<TResult> onAudio,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Image => onImage(),
            _ when this == Audio => onAudio(),
            _ => otherwise(Value)
        };

    public void Match(Action onText, Action onImage, Action onAudio, Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Image) onImage();
        else if (this == Audio) onAudio();
        else otherwise(Value);
    }
}
