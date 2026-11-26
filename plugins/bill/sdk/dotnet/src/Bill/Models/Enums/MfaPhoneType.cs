using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Response for MFA Phone Type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MfaPhoneType>))]
public sealed record MfaPhoneType : OpenStringEnum<MfaPhoneType>
{
    private MfaPhoneType(string value) : base(value)
    {
    }

    public static readonly MfaPhoneType Mobile = new("MOBILE");

    public static readonly MfaPhoneType Home = new("HOME");

    public static readonly MfaPhoneType Work = new("WORK");

    public TResult Match<TResult>(Func<TResult> onMobile,
        Func<TResult> onHome,
        Func<TResult> onWork,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mobile => onMobile(),
            _ when this == Home => onHome(),
            _ when this == Work => onWork(),
            _ => otherwise(Value)
        };

    public void Match(Action onMobile, Action onHome, Action onWork, Action<string> otherwise)
    {
        if (this == Mobile) onMobile();
        else if (this == Home) onHome();
        else if (this == Work) onWork();
        else otherwise(Value);
    }
}
