using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Classification mode indicates whether the documents are MULTI_CLASS or MULTI_LABEL.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode1>))]
public sealed record Mode1 : OpenStringEnum<Mode1>
{
    private Mode1(string value) : base(value)
    {
    }

    public static readonly Mode1 MultiClass = new("MULTI_CLASS");

    public static readonly Mode1 MultiLabel = new("MULTI_LABEL");

    public TResult Match<TResult>(Func<TResult> onMultiClass,
        Func<TResult> onMultiLabel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MultiClass => onMultiClass(),
            _ when this == MultiLabel => onMultiLabel(),
            _ => otherwise(Value)
        };

    public void Match(Action onMultiClass, Action onMultiLabel, Action<string> otherwise)
    {
        if (this == MultiClass) onMultiClass();
        else if (this == MultiLabel) onMultiLabel();
        else otherwise(Value);
    }
}
