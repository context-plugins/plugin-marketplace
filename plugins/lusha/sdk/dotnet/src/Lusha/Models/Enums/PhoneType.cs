using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

/// <summary>
/// The type of phone number
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PhoneType>))]
public sealed record PhoneType : OpenStringEnum<PhoneType>
{
    private PhoneType(string value) : base(value)
    {
    }

    public static readonly PhoneType Mobile = new("Mobile");

    public static readonly PhoneType Direct = new("Direct");

    public static readonly PhoneType Phone = new("Phone");

    public TResult Match<TResult>(Func<TResult> onMobile,
        Func<TResult> onDirect,
        Func<TResult> onPhone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mobile => onMobile(),
            _ when this == Direct => onDirect(),
            _ when this == Phone => onPhone(),
            _ => otherwise(Value)
        };

    public void Match(Action onMobile, Action onDirect, Action onPhone, Action<string> otherwise)
    {
        if (this == Mobile) onMobile();
        else if (this == Direct) onDirect();
        else if (this == Phone) onPhone();
        else otherwise(Value);
    }
}
