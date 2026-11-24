using System;
using System.Text.Json.Serialization;
using SerpApi.Core.Enum;

namespace SerpApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Device>))]
public sealed record Device : OpenStringEnum<Device>
{
    private Device(string value) : base(value)
    {
    }

    public static readonly Device Desktop = new("desktop");

    public static readonly Device Tablet = new("tablet");

    public static readonly Device Mobile = new("mobile");

    public TResult Match<TResult>(Func<TResult> onDesktop,
        Func<TResult> onTablet,
        Func<TResult> onMobile,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Desktop => onDesktop(),
            _ when this == Tablet => onTablet(),
            _ when this == Mobile => onMobile(),
            _ => otherwise(Value)
        };

    public void Match(Action onDesktop, Action onTablet, Action onMobile, Action<string> otherwise)
    {
        if (this == Desktop) onDesktop();
        else if (this == Tablet) onTablet();
        else if (this == Mobile) onMobile();
        else otherwise(Value);
    }
}
