using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// Color of the project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ColorAsanaProjectsApi>))]
public sealed record ColorAsanaProjectsApi : OpenStringEnum<ColorAsanaProjectsApi>
{
    private ColorAsanaProjectsApi(string value) : base(value)
    {
    }

    public static readonly ColorAsanaProjectsApi DarkPink = new("dark-pink");

    public static readonly ColorAsanaProjectsApi DarkGreen = new("dark-green");

    public static readonly ColorAsanaProjectsApi DarkBlue = new("dark-blue");

    public static readonly ColorAsanaProjectsApi DarkRed = new("dark-red");

    public static readonly ColorAsanaProjectsApi DarkTeal = new("dark-teal");

    public static readonly ColorAsanaProjectsApi DarkBrown = new("dark-brown");

    public static readonly ColorAsanaProjectsApi DarkOrange = new("dark-orange");

    public static readonly ColorAsanaProjectsApi DarkPurple = new("dark-purple");

    public static readonly ColorAsanaProjectsApi DarkWarmGray = new("dark-warm-gray");

    public static readonly ColorAsanaProjectsApi LightPink = new("light-pink");

    public static readonly ColorAsanaProjectsApi LightGreen = new("light-green");

    public static readonly ColorAsanaProjectsApi LightBlue = new("light-blue");

    public static readonly ColorAsanaProjectsApi LightRed = new("light-red");

    public static readonly ColorAsanaProjectsApi LightTeal = new("light-teal");

    public static readonly ColorAsanaProjectsApi LightBrown = new("light-brown");

    public static readonly ColorAsanaProjectsApi LightOrange = new("light-orange");

    public static readonly ColorAsanaProjectsApi LightPurple = new("light-purple");

    public static readonly ColorAsanaProjectsApi LightWarmGray = new("light-warm-gray");

    public TResult Match<TResult>(Func<TResult> onDarkPink,
        Func<TResult> onDarkGreen,
        Func<TResult> onDarkBlue,
        Func<TResult> onDarkRed,
        Func<TResult> onDarkTeal,
        Func<TResult> onDarkBrown,
        Func<TResult> onDarkOrange,
        Func<TResult> onDarkPurple,
        Func<TResult> onDarkWarmGray,
        Func<TResult> onLightPink,
        Func<TResult> onLightGreen,
        Func<TResult> onLightBlue,
        Func<TResult> onLightRed,
        Func<TResult> onLightTeal,
        Func<TResult> onLightBrown,
        Func<TResult> onLightOrange,
        Func<TResult> onLightPurple,
        Func<TResult> onLightWarmGray,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DarkPink => onDarkPink(),
            _ when this == DarkGreen => onDarkGreen(),
            _ when this == DarkBlue => onDarkBlue(),
            _ when this == DarkRed => onDarkRed(),
            _ when this == DarkTeal => onDarkTeal(),
            _ when this == DarkBrown => onDarkBrown(),
            _ when this == DarkOrange => onDarkOrange(),
            _ when this == DarkPurple => onDarkPurple(),
            _ when this == DarkWarmGray => onDarkWarmGray(),
            _ when this == LightPink => onLightPink(),
            _ when this == LightGreen => onLightGreen(),
            _ when this == LightBlue => onLightBlue(),
            _ when this == LightRed => onLightRed(),
            _ when this == LightTeal => onLightTeal(),
            _ when this == LightBrown => onLightBrown(),
            _ when this == LightOrange => onLightOrange(),
            _ when this == LightPurple => onLightPurple(),
            _ when this == LightWarmGray => onLightWarmGray(),
            _ => otherwise(Value)
        };

    public void Match(Action onDarkPink,
        Action onDarkGreen,
        Action onDarkBlue,
        Action onDarkRed,
        Action onDarkTeal,
        Action onDarkBrown,
        Action onDarkOrange,
        Action onDarkPurple,
        Action onDarkWarmGray,
        Action onLightPink,
        Action onLightGreen,
        Action onLightBlue,
        Action onLightRed,
        Action onLightTeal,
        Action onLightBrown,
        Action onLightOrange,
        Action onLightPurple,
        Action onLightWarmGray,
        Action<string> otherwise)
    {
        if (this == DarkPink) onDarkPink();
        else if (this == DarkGreen) onDarkGreen();
        else if (this == DarkBlue) onDarkBlue();
        else if (this == DarkRed) onDarkRed();
        else if (this == DarkTeal) onDarkTeal();
        else if (this == DarkBrown) onDarkBrown();
        else if (this == DarkOrange) onDarkOrange();
        else if (this == DarkPurple) onDarkPurple();
        else if (this == DarkWarmGray) onDarkWarmGray();
        else if (this == LightPink) onLightPink();
        else if (this == LightGreen) onLightGreen();
        else if (this == LightBlue) onLightBlue();
        else if (this == LightRed) onLightRed();
        else if (this == LightTeal) onLightTeal();
        else if (this == LightBrown) onLightBrown();
        else if (this == LightOrange) onLightOrange();
        else if (this == LightPurple) onLightPurple();
        else if (this == LightWarmGray) onLightWarmGray();
        else otherwise(Value);
    }
}
