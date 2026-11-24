using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MobileOs>))]
public sealed record MobileOs : OpenStringEnum<MobileOs>
{
    private MobileOs(string value) : base(value)
    {
    }

    public static readonly MobileOs Ios = new("ios");

    public static readonly MobileOs Android = new("android");

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
