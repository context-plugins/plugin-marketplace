using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The type of the technical cue.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type6>))]
public sealed record Type6 : OpenStringEnum<Type6>
{
    private Type6(string value) : base(value)
    {
    }

    public static readonly Type6 ColorBars = new("ColorBars");

    public static readonly Type6 EndCredits = new("EndCredits");

    public static readonly Type6 BlackFrames = new("BlackFrames");

    public static readonly Type6 OpeningCredits = new("OpeningCredits");

    public static readonly Type6 StudioLogo = new("StudioLogo");

    public static readonly Type6 Slate = new("Slate");

    public static readonly Type6 Content = new("Content");

    public TResult Match<TResult>(Func<TResult> onColorBars,
        Func<TResult> onEndCredits,
        Func<TResult> onBlackFrames,
        Func<TResult> onOpeningCredits,
        Func<TResult> onStudioLogo,
        Func<TResult> onSlate,
        Func<TResult> onContent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ColorBars => onColorBars(),
            _ when this == EndCredits => onEndCredits(),
            _ when this == BlackFrames => onBlackFrames(),
            _ when this == OpeningCredits => onOpeningCredits(),
            _ when this == StudioLogo => onStudioLogo(),
            _ when this == Slate => onSlate(),
            _ when this == Content => onContent(),
            _ => otherwise(Value)
        };

    public void Match(Action onColorBars,
        Action onEndCredits,
        Action onBlackFrames,
        Action onOpeningCredits,
        Action onStudioLogo,
        Action onSlate,
        Action onContent,
        Action<string> otherwise)
    {
        if (this == ColorBars) onColorBars();
        else if (this == EndCredits) onEndCredits();
        else if (this == BlackFrames) onBlackFrames();
        else if (this == OpeningCredits) onOpeningCredits();
        else if (this == StudioLogo) onStudioLogo();
        else if (this == Slate) onSlate();
        else if (this == Content) onContent();
        else otherwise(Value);
    }
}
