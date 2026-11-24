using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NotificationFilterTypeDto>))]
public sealed record NotificationFilterTypeDto : OpenStringEnum<NotificationFilterTypeDto>
{
    private NotificationFilterTypeDto(string value) : base(value)
    {
    }

    public static readonly NotificationFilterTypeDto EqualsMember = new("equals");

    public static readonly NotificationFilterTypeDto Contains = new("contains");

    public static readonly NotificationFilterTypeDto In = new("in");

    public static readonly NotificationFilterTypeDto And = new("and");

    public static readonly NotificationFilterTypeDto Or = new("or");

    public static readonly NotificationFilterTypeDto Not = new("not");

    public TResult Match<TResult>(Func<TResult> onEqualsMember,
        Func<TResult> onContains,
        Func<TResult> onIn,
        Func<TResult> onAnd,
        Func<TResult> onOr,
        Func<TResult> onNot,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EqualsMember => onEqualsMember(),
            _ when this == Contains => onContains(),
            _ when this == In => onIn(),
            _ when this == And => onAnd(),
            _ when this == Or => onOr(),
            _ when this == Not => onNot(),
            _ => otherwise(Value)
        };

    public void Match(Action onEqualsMember,
        Action onContains,
        Action onIn,
        Action onAnd,
        Action onOr,
        Action onNot,
        Action<string> otherwise)
    {
        if (this == EqualsMember) onEqualsMember();
        else if (this == Contains) onContains();
        else if (this == In) onIn();
        else if (this == And) onAnd();
        else if (this == Or) onOr();
        else if (this == Not) onNot();
        else otherwise(Value);
    }
}
