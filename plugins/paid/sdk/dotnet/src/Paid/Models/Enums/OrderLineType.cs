using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderLineType>))]
public sealed record OrderLineType : OpenStringEnum<OrderLineType>
{
    private OrderLineType(string value) : base(value)
    {
    }

    public static readonly OrderLineType Standard = new("STANDARD");

    public static readonly OrderLineType ProrationCredit = new("PRORATION_CREDIT");

    public static readonly OrderLineType ProrationCharge = new("PRORATION_CHARGE");

    public static readonly OrderLineType Credit = new("CREDIT");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onProrationCredit,
        Func<TResult> onProrationCharge,
        Func<TResult> onCredit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == ProrationCredit => onProrationCredit(),
            _ when this == ProrationCharge => onProrationCharge(),
            _ when this == Credit => onCredit(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard,
        Action onProrationCredit,
        Action onProrationCharge,
        Action onCredit,
        Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == ProrationCredit) onProrationCredit();
        else if (this == ProrationCharge) onProrationCharge();
        else if (this == Credit) onCredit();
        else otherwise(Value);
    }
}
