using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Device1>))]
public sealed record Device1 : OpenStringEnum<Device1>
{
    private Device1(string value) : base(value)
    {
    }

    public static readonly Device1 Desktop = new("desktop");

    public static readonly Device1 Iphone15 = new("iphone_15");

    public static readonly Device1 IphoneSe = new("iphone_se");

    public static readonly Device1 Pixel8 = new("pixel_8");

    public static readonly Device1 Ipad = new("ipad");

    public static readonly Device1 IpadPro = new("ipad_pro");

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
