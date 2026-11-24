using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Type of the device.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DeviceType>))]
public sealed record DeviceType : OpenStringEnum<DeviceType>
{
    private DeviceType(string value) : base(value)
    {
    }

    public static readonly DeviceType DeviceTypeUnspecified = new("DEVICE_TYPE_UNSPECIFIED");

    public static readonly DeviceType Web = new("WEB");

    public static readonly DeviceType MobileWeb = new("MOBILE_WEB");

    public static readonly DeviceType Android = new("ANDROID");

    public static readonly DeviceType Ios = new("IOS");

    public static readonly DeviceType Bot = new("BOT");

    public static readonly DeviceType Other = new("OTHER");

    public TResult Match<TResult>(Func<TResult> onDeviceTypeUnspecified,
        Func<TResult> onWeb,
        Func<TResult> onMobileWeb,
        Func<TResult> onAndroid,
        Func<TResult> onIos,
        Func<TResult> onBot,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeviceTypeUnspecified => onDeviceTypeUnspecified(),
            _ when this == Web => onWeb(),
            _ when this == MobileWeb => onMobileWeb(),
            _ when this == Android => onAndroid(),
            _ when this == Ios => onIos(),
            _ when this == Bot => onBot(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeviceTypeUnspecified,
        Action onWeb,
        Action onMobileWeb,
        Action onAndroid,
        Action onIos,
        Action onBot,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == DeviceTypeUnspecified) onDeviceTypeUnspecified();
        else if (this == Web) onWeb();
        else if (this == MobileWeb) onMobileWeb();
        else if (this == Android) onAndroid();
        else if (this == Ios) onIos();
        else if (this == Bot) onBot();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
