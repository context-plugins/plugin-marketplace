using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Operators for approval rules.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RuleOperatorCreateDto>))]
public sealed record RuleOperatorCreateDto : OpenStringEnum<RuleOperatorCreateDto>
{
    private RuleOperatorCreateDto(string value) : base(value)
    {
    }

    public static readonly RuleOperatorCreateDto Lt = new("lt");

    public static readonly RuleOperatorCreateDto Gte = new("gte");

    public static readonly RuleOperatorCreateDto In = new("in");

    public TResult Match<TResult>(Func<TResult> onLt,
        Func<TResult> onGte,
        Func<TResult> onIn,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Lt => onLt(),
            _ when this == Gte => onGte(),
            _ when this == In => onIn(),
            _ => otherwise(Value)
        };

    public void Match(Action onLt, Action onGte, Action onIn, Action<string> otherwise)
    {
        if (this == Lt) onLt();
        else if (this == Gte) onGte();
        else if (this == In) onIn();
        else otherwise(Value);
    }
}
