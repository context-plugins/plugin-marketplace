using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum for phone type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PhoneType>))]
public sealed record PhoneType : OpenStringEnum<PhoneType>
{
    private PhoneType(string value) : base(value)
    {
    }

    public static readonly PhoneType Mobile = new("MOBILE");

    public static readonly PhoneType Home = new("HOME");

    public TResult Match<TResult>(Func<TResult> onMobile, Func<TResult> onHome, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mobile => onMobile(),
            _ when this == Home => onHome(),
            _ => otherwise(Value)
        };

    public void Match(Action onMobile, Action onHome, Action<string> otherwise)
    {
        if (this == Mobile) onMobile();
        else if (this == Home) onHome();
        else otherwise(Value);
    }
}
