using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// single_use: auto-closes after first successful payment (requires fixed_amount=true). multiple_use: stays open for multiple payments.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Usage>))]
public sealed record Usage : OpenStringEnum<Usage>
{
    private Usage(string value) : base(value)
    {
    }

    public static readonly Usage SingleUse = new("single_use");

    public static readonly Usage MultipleUse = new("multiple_use");

    public TResult Match<TResult>(Func<TResult> onSingleUse,
        Func<TResult> onMultipleUse,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SingleUse => onSingleUse(),
            _ when this == MultipleUse => onMultipleUse(),
            _ => otherwise(Value)
        };

    public void Match(Action onSingleUse, Action onMultipleUse, Action<string> otherwise)
    {
        if (this == SingleUse) onSingleUse();
        else if (this == MultipleUse) onMultipleUse();
        else otherwise(Value);
    }
}
