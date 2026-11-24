using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Device the search is run from. 'desktop' returns the desktop SERP; 'ios' (Safari on iPhone), 'android' (Chrome on Android) and 'mobile' (alias for 'android') all return the mobile SERP.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Device2>))]
public sealed record Device2 : OpenStringEnum<Device2>
{
    private Device2(string value) : base(value)
    {
    }

    public static readonly Device2 Desktop = new("desktop");

    public static readonly Device2 Mobile = new("mobile");

    public static readonly Device2 Ios = new("ios");

    public static readonly Device2 Android = new("android");

    public TResult Match<TResult>(Func<TResult> onDesktop,
        Func<TResult> onMobile,
        Func<TResult> onIos,
        Func<TResult> onAndroid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Desktop => onDesktop(),
            _ when this == Mobile => onMobile(),
            _ when this == Ios => onIos(),
            _ when this == Android => onAndroid(),
            _ => otherwise(Value)
        };

    public void Match(Action onDesktop, Action onMobile, Action onIos, Action onAndroid, Action<string> otherwise)
    {
        if (this == Desktop) onDesktop();
        else if (this == Mobile) onMobile();
        else if (this == Ios) onIos();
        else if (this == Android) onAndroid();
        else otherwise(Value);
    }
}
