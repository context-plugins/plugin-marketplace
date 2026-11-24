using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<UsageType>))]
public sealed record UsageType : OpenStringEnum<UsageType>
{
    private UsageType(string value) : base(value)
    {
    }

    public static readonly UsageType SingleUse = new("single_use");

    public static readonly UsageType MultipleUse = new("multiple_use");

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
