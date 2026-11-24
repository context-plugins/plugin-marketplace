using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Void type enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VoidType>))]
public sealed record VoidType : OpenStringEnum<VoidType>
{
    private VoidType(string value) : base(value)
    {
    }

    public static readonly VoidType VoidAndCredit = new("VOID_AND_CREDIT");

    public static readonly VoidType VoidAndReissue = new("VOID_AND_REISSUE");

    public static readonly VoidType VoidOnly = new("VOID_ONLY");

    public static readonly VoidType VoidAndReissueVcard = new("VOID_AND_REISSUE_VCARD");

    public TResult Match<TResult>(Func<TResult> onVoidAndCredit,
        Func<TResult> onVoidAndReissue,
        Func<TResult> onVoidOnly,
        Func<TResult> onVoidAndReissueVcard,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == VoidAndCredit => onVoidAndCredit(),
            _ when this == VoidAndReissue => onVoidAndReissue(),
            _ when this == VoidOnly => onVoidOnly(),
            _ when this == VoidAndReissueVcard => onVoidAndReissueVcard(),
            _ => otherwise(Value)
        };

    public void Match(Action onVoidAndCredit,
        Action onVoidAndReissue,
        Action onVoidOnly,
        Action onVoidAndReissueVcard,
        Action<string> otherwise)
    {
        if (this == VoidAndCredit) onVoidAndCredit();
        else if (this == VoidAndReissue) onVoidAndReissue();
        else if (this == VoidOnly) onVoidOnly();
        else if (this == VoidAndReissueVcard) onVoidAndReissueVcard();
        else otherwise(Value);
    }
}
