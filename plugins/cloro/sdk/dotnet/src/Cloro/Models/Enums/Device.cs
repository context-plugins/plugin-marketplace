using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Device the search is run from. 'desktop' returns the desktop news SERP; 'ios' (Safari on iPhone), 'android' (Chrome on Android) and 'mobile' (alias for 'android') all return the mobile news SERP.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Device>))]
public sealed record Device : OpenStringEnum<Device>
{
    private Device(string value) : base(value)
    {
    }

    public static readonly Device Desktop = new("desktop");

    public static readonly Device Mobile = new("mobile");

    public static readonly Device Ios = new("ios");

    public static readonly Device Android = new("android");

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
