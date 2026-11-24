using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DataStandardScopeAttributeFilterTypeDto>))]
public sealed record DataStandardScopeAttributeFilterTypeDto : OpenStringEnum<DataStandardScopeAttributeFilterTypeDto>
{
    private DataStandardScopeAttributeFilterTypeDto(string value) : base(value)
    {
    }

    public static readonly DataStandardScopeAttributeFilterTypeDto EqualsMember = new("equals");

    public static readonly DataStandardScopeAttributeFilterTypeDto Contains = new("contains");

    public static readonly DataStandardScopeAttributeFilterTypeDto And = new("and");

    public static readonly DataStandardScopeAttributeFilterTypeDto Or = new("or");

    public TResult Match<TResult>(Func<TResult> onEqualsMember,
        Func<TResult> onContains,
        Func<TResult> onAnd,
        Func<TResult> onOr,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EqualsMember => onEqualsMember(),
            _ when this == Contains => onContains(),
            _ when this == And => onAnd(),
            _ when this == Or => onOr(),
            _ => otherwise(Value)
        };

    public void Match(Action onEqualsMember, Action onContains, Action onAnd, Action onOr, Action<string> otherwise)
    {
        if (this == EqualsMember) onEqualsMember();
        else if (this == Contains) onContains();
        else if (this == And) onAnd();
        else if (this == Or) onOr();
        else otherwise(Value);
    }
}
