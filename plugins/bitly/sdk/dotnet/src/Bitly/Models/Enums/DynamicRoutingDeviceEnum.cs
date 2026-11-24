using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// Device type values for use in dynamic routing rules (device_match / device_exclude)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DynamicRoutingDeviceEnum>))]
public sealed record DynamicRoutingDeviceEnum : OpenStringEnum<DynamicRoutingDeviceEnum>
{
    private DynamicRoutingDeviceEnum(string value) : base(value)
    {
    }

    public static readonly DynamicRoutingDeviceEnum Mobile = new("mobile");

    public static readonly DynamicRoutingDeviceEnum Tablet = new("tablet");

    public static readonly DynamicRoutingDeviceEnum Desktop = new("desktop");

    public TResult Match<TResult>(Func<TResult> onMobile,
        Func<TResult> onTablet,
        Func<TResult> onDesktop,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mobile => onMobile(),
            _ when this == Tablet => onTablet(),
            _ when this == Desktop => onDesktop(),
            _ => otherwise(Value)
        };

    public void Match(Action onMobile, Action onTablet, Action onDesktop, Action<string> otherwise)
    {
        if (this == Mobile) onMobile();
        else if (this == Tablet) onTablet();
        else if (this == Desktop) onDesktop();
        else otherwise(Value);
    }
}
