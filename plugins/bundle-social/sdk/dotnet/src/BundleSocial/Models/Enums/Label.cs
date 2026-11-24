using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Label>))]
public sealed record Label : OpenStringEnum<Label>
{
    private Label(string value) : base(value)
    {
    }

    public static readonly Label NoUnauthenticated = new("!no-unauthenticated");

    public static readonly Label Porn = new("porn");

    public static readonly Label Sexual = new("sexual");

    public static readonly Label Nudity = new("nudity");

    public static readonly Label GraphicMedia = new("graphic-media");

    public TResult Match<TResult>(Func<TResult> onNoUnauthenticated,
        Func<TResult> onPorn,
        Func<TResult> onSexual,
        Func<TResult> onNudity,
        Func<TResult> onGraphicMedia,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoUnauthenticated => onNoUnauthenticated(),
            _ when this == Porn => onPorn(),
            _ when this == Sexual => onSexual(),
            _ when this == Nudity => onNudity(),
            _ when this == GraphicMedia => onGraphicMedia(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoUnauthenticated,
        Action onPorn,
        Action onSexual,
        Action onNudity,
        Action onGraphicMedia,
        Action<string> otherwise)
    {
        if (this == NoUnauthenticated) onNoUnauthenticated();
        else if (this == Porn) onPorn();
        else if (this == Sexual) onSexual();
        else if (this == Nudity) onNudity();
        else if (this == GraphicMedia) onGraphicMedia();
        else otherwise(Value);
    }
}
