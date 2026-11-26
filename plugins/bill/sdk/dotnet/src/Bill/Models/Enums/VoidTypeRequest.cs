using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Void type request enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VoidTypeRequest>))]
public sealed record VoidTypeRequest : OpenStringEnum<VoidTypeRequest>
{
    private VoidTypeRequest(string value) : base(value)
    {
    }

    public static readonly VoidTypeRequest VoidAndCredit = new("VOID_AND_CREDIT");

    public static readonly VoidTypeRequest VoidAndReissue = new("VOID_AND_REISSUE");

    public TResult Match<TResult>(Func<TResult> onVoidAndCredit,
        Func<TResult> onVoidAndReissue,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == VoidAndCredit => onVoidAndCredit(),
            _ when this == VoidAndReissue => onVoidAndReissue(),
            _ => otherwise(Value)
        };

    public void Match(Action onVoidAndCredit, Action onVoidAndReissue, Action<string> otherwise)
    {
        if (this == VoidAndCredit) onVoidAndCredit();
        else if (this == VoidAndReissue) onVoidAndReissue();
        else otherwise(Value);
    }
}
