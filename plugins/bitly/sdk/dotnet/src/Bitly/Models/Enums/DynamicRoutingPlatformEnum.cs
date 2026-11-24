using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// Platform (OS) values for use in dynamic routing rules (os_match / os_exclude)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DynamicRoutingPlatformEnum>))]
public sealed record DynamicRoutingPlatformEnum : OpenStringEnum<DynamicRoutingPlatformEnum>
{
    private DynamicRoutingPlatformEnum(string value) : base(value)
    {
    }

    public static readonly DynamicRoutingPlatformEnum Ios = new("ios");

    public static readonly DynamicRoutingPlatformEnum Android = new("android");

    public TResult Match<TResult>(Func<TResult> onIos, Func<TResult> onAndroid, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ios => onIos(),
            _ when this == Android => onAndroid(),
            _ => otherwise(Value)
        };

    public void Match(Action onIos, Action onAndroid, Action<string> otherwise)
    {
        if (this == Ios) onIos();
        else if (this == Android) onAndroid();
        else otherwise(Value);
    }
}
