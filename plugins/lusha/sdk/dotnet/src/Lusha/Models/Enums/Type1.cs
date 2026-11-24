using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Mobile = new("mobile");

    public static readonly Type1 Direct = new("direct");

    public static readonly Type1 Work = new("work");

    public static readonly Type1 Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onMobile,
        Func<TResult> onDirect,
        Func<TResult> onWork,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mobile => onMobile(),
            _ when this == Direct => onDirect(),
            _ when this == Work => onWork(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onMobile, Action onDirect, Action onWork, Action onUnknown, Action<string> otherwise)
    {
        if (this == Mobile) onMobile();
        else if (this == Direct) onDirect();
        else if (this == Work) onWork();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
