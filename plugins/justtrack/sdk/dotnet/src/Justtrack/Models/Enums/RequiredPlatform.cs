using System;
using System.Text.Json.Serialization;
using Justtrack.Core.Enum;

namespace Justtrack.Models.Enums;

/// <summary>
/// identifier of the platform
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RequiredPlatform>))]
public sealed record RequiredPlatform : OpenStringEnum<RequiredPlatform>
{
    private RequiredPlatform(string value) : base(value)
    {
    }

    public static readonly RequiredPlatform Android = new("android");

    public static readonly RequiredPlatform Ios = new("ios");

    public TResult Match<TResult>(Func<TResult> onAndroid, Func<TResult> onIos, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Android => onAndroid(),
            _ when this == Ios => onIos(),
            _ => otherwise(Value)
        };

    public void Match(Action onAndroid, Action onIos, Action<string> otherwise)
    {
        if (this == Android) onAndroid();
        else if (this == Ios) onIos();
        else otherwise(Value);
    }
}
