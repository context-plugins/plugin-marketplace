using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DiscountCodeType>))]
public sealed record DiscountCodeType : OpenStringEnum<DiscountCodeType>
{
    private DiscountCodeType(string value) : base(value)
    {
    }

    public static readonly DiscountCodeType Percentage = new("percentage");

    public static readonly DiscountCodeType Fixed = new("fixed");

    public TResult Match<TResult>(Func<TResult> onPercentage, Func<TResult> onFixed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Percentage => onPercentage(),
            _ when this == Fixed => onFixed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPercentage, Action onFixed, Action<string> otherwise)
    {
        if (this == Percentage) onPercentage();
        else if (this == Fixed) onFixed();
        else otherwise(Value);
    }
}
