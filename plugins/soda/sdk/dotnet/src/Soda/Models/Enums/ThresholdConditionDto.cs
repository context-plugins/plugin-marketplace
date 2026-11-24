using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ThresholdConditionDto>))]
public sealed record ThresholdConditionDto : OpenStringEnum<ThresholdConditionDto>
{
    private ThresholdConditionDto(string value) : base(value)
    {
    }

    public static readonly ThresholdConditionDto GreaterThan = new("greaterThan");

    public static readonly ThresholdConditionDto LessThan = new("lessThan");

    public TResult Match<TResult>(Func<TResult> onGreaterThan,
        Func<TResult> onLessThan,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GreaterThan => onGreaterThan(),
            _ when this == LessThan => onLessThan(),
            _ => otherwise(Value)
        };

    public void Match(Action onGreaterThan, Action onLessThan, Action<string> otherwise)
    {
        if (this == GreaterThan) onGreaterThan();
        else if (this == LessThan) onLessThan();
        else otherwise(Value);
    }
}
