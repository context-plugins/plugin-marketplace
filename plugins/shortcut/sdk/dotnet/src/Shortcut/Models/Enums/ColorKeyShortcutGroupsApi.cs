using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The color key you wish to use for the Group in the system.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ColorKeyShortcutGroupsApi>))]
public sealed record ColorKeyShortcutGroupsApi : OpenStringEnum<ColorKeyShortcutGroupsApi>
{
    private ColorKeyShortcutGroupsApi(string value) : base(value)
    {
    }

    public static readonly ColorKeyShortcutGroupsApi Blue = new("blue");

    public static readonly ColorKeyShortcutGroupsApi Purple = new("purple");

    public static readonly ColorKeyShortcutGroupsApi MidnightBlue = new("midnight-blue");

    public static readonly ColorKeyShortcutGroupsApi Orange = new("orange");

    public static readonly ColorKeyShortcutGroupsApi YellowGreen = new("yellow-green");

    public static readonly ColorKeyShortcutGroupsApi Brass = new("brass");

    public static readonly ColorKeyShortcutGroupsApi Gray = new("gray");

    public static readonly ColorKeyShortcutGroupsApi Fuchsia = new("fuchsia");

    public static readonly ColorKeyShortcutGroupsApi Yellow = new("yellow");

    public static readonly ColorKeyShortcutGroupsApi Pink = new("pink");

    public static readonly ColorKeyShortcutGroupsApi SkyBlue = new("sky-blue");

    public static readonly ColorKeyShortcutGroupsApi Green = new("green");

    public static readonly ColorKeyShortcutGroupsApi Red = new("red");

    public static readonly ColorKeyShortcutGroupsApi Black = new("black");

    public static readonly ColorKeyShortcutGroupsApi Slate = new("slate");

    public static readonly ColorKeyShortcutGroupsApi Turquoise = new("turquoise");

    public TResult Match<TResult>(Func<TResult> onBlue,
        Func<TResult> onPurple,
        Func<TResult> onMidnightBlue,
        Func<TResult> onOrange,
        Func<TResult> onYellowGreen,
        Func<TResult> onBrass,
        Func<TResult> onGray,
        Func<TResult> onFuchsia,
        Func<TResult> onYellow,
        Func<TResult> onPink,
        Func<TResult> onSkyBlue,
        Func<TResult> onGreen,
        Func<TResult> onRed,
        Func<TResult> onBlack,
        Func<TResult> onSlate,
        Func<TResult> onTurquoise,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Blue => onBlue(),
            _ when this == Purple => onPurple(),
            _ when this == MidnightBlue => onMidnightBlue(),
            _ when this == Orange => onOrange(),
            _ when this == YellowGreen => onYellowGreen(),
            _ when this == Brass => onBrass(),
            _ when this == Gray => onGray(),
            _ when this == Fuchsia => onFuchsia(),
            _ when this == Yellow => onYellow(),
            _ when this == Pink => onPink(),
            _ when this == SkyBlue => onSkyBlue(),
            _ when this == Green => onGreen(),
            _ when this == Red => onRed(),
            _ when this == Black => onBlack(),
            _ when this == Slate => onSlate(),
            _ when this == Turquoise => onTurquoise(),
            _ => otherwise(Value)
        };

    public void Match(Action onBlue,
        Action onPurple,
        Action onMidnightBlue,
        Action onOrange,
        Action onYellowGreen,
        Action onBrass,
        Action onGray,
        Action onFuchsia,
        Action onYellow,
        Action onPink,
        Action onSkyBlue,
        Action onGreen,
        Action onRed,
        Action onBlack,
        Action onSlate,
        Action onTurquoise,
        Action<string> otherwise)
    {
        if (this == Blue) onBlue();
        else if (this == Purple) onPurple();
        else if (this == MidnightBlue) onMidnightBlue();
        else if (this == Orange) onOrange();
        else if (this == YellowGreen) onYellowGreen();
        else if (this == Brass) onBrass();
        else if (this == Gray) onGray();
        else if (this == Fuchsia) onFuchsia();
        else if (this == Yellow) onYellow();
        else if (this == Pink) onPink();
        else if (this == SkyBlue) onSkyBlue();
        else if (this == Green) onGreen();
        else if (this == Red) onRed();
        else if (this == Black) onBlack();
        else if (this == Slate) onSlate();
        else if (this == Turquoise) onTurquoise();
        else otherwise(Value);
    }
}
