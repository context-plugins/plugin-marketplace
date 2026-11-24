using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Foundation = new("foundation");

    public static readonly Kind Nonprofit = new("nonprofit");

    public TResult Match<TResult>(Func<TResult> onFoundation,
        Func<TResult> onNonprofit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Foundation => onFoundation(),
            _ when this == Nonprofit => onNonprofit(),
            _ => otherwise(Value)
        };

    public void Match(Action onFoundation, Action onNonprofit, Action<string> otherwise)
    {
        if (this == Foundation) onFoundation();
        else if (this == Nonprofit) onNonprofit();
        else otherwise(Value);
    }
}
