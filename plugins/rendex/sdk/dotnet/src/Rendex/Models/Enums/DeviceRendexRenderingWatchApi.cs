using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DeviceRendexRenderingWatchApi>))]
public sealed record DeviceRendexRenderingWatchApi : OpenStringEnum<DeviceRendexRenderingWatchApi>
{
    private DeviceRendexRenderingWatchApi(string value) : base(value)
    {
    }

    public static readonly DeviceRendexRenderingWatchApi Desktop = new("desktop");

    public static readonly DeviceRendexRenderingWatchApi Iphone15 = new("iphone_15");

    public static readonly DeviceRendexRenderingWatchApi IphoneSe = new("iphone_se");

    public static readonly DeviceRendexRenderingWatchApi Pixel8 = new("pixel_8");

    public static readonly DeviceRendexRenderingWatchApi Ipad = new("ipad");

    public static readonly DeviceRendexRenderingWatchApi IpadPro = new("ipad_pro");

    public TResult Match<TResult>(Func<TResult> onDesktop,
        Func<TResult> onIphone15,
        Func<TResult> onIphoneSe,
        Func<TResult> onPixel8,
        Func<TResult> onIpad,
        Func<TResult> onIpadPro,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Desktop => onDesktop(),
            _ when this == Iphone15 => onIphone15(),
            _ when this == IphoneSe => onIphoneSe(),
            _ when this == Pixel8 => onPixel8(),
            _ when this == Ipad => onIpad(),
            _ when this == IpadPro => onIpadPro(),
            _ => otherwise(Value)
        };

    public void Match(Action onDesktop,
        Action onIphone15,
        Action onIphoneSe,
        Action onPixel8,
        Action onIpad,
        Action onIpadPro,
        Action<string> otherwise)
    {
        if (this == Desktop) onDesktop();
        else if (this == Iphone15) onIphone15();
        else if (this == IphoneSe) onIphoneSe();
        else if (this == Pixel8) onPixel8();
        else if (this == Ipad) onIpad();
        else if (this == IpadPro) onIpadPro();
        else otherwise(Value);
    }
}
