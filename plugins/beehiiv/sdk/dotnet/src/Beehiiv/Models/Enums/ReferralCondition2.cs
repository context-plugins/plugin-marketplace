using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The condition required to show the block to subscribers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReferralCondition2>))]
public sealed record ReferralCondition2 : OpenStringEnum<ReferralCondition2>
{
    private ReferralCondition2(string value) : base(value)
    {
    }

    public static readonly ReferralCondition2 Eq = new("eq");

    public static readonly ReferralCondition2 Gt = new("gt");

    public static readonly ReferralCondition2 Lt = new("lt");

    public TResult Match<TResult>(Func<TResult> onEq,
        Func<TResult> onGt,
        Func<TResult> onLt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Eq => onEq(),
            _ when this == Gt => onGt(),
            _ when this == Lt => onLt(),
            _ => otherwise(Value)
        };

    public void Match(Action onEq, Action onGt, Action onLt, Action<string> otherwise)
    {
        if (this == Eq) onEq();
        else if (this == Gt) onGt();
        else if (this == Lt) onLt();
        else otherwise(Value);
    }
}
