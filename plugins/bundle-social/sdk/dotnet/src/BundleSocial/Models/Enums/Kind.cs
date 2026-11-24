using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

/// <summary>
/// Whether the background is a flat color, a gradient, or an illustration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Color = new("color");

    public static readonly Kind Gradient = new("gradient");

    public static readonly Kind Illustration = new("illustration");

    public TResult Match<TResult>(Func<TResult> onColor,
        Func<TResult> onGradient,
        Func<TResult> onIllustration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Color => onColor(),
            _ when this == Gradient => onGradient(),
            _ when this == Illustration => onIllustration(),
            _ => otherwise(Value)
        };

    public void Match(Action onColor, Action onGradient, Action onIllustration, Action<string> otherwise)
    {
        if (this == Color) onColor();
        else if (this == Gradient) onGradient();
        else if (this == Illustration) onIllustration();
        else otherwise(Value);
    }
}
